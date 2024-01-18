import { type CanActivate, type ExecutionContext, Injectable } from '@nestjs/common';
import { EnvService } from '#api/common/service/env/env.service';
import { SupabaseService } from '#api/infra/supabase/supabase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly envService: EnvService,
  ) {}

  async canActivate(context: ExecutionContext) {
    if (this.envService.NodeEnv === 'development') {
      return true;
    }
    let accessToken: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.req && arg.req.headers) {
        if (arg.req.headers.authorization) {
          [, accessToken] = arg.req.headers.authorization.split(' ');
        }
      }
    });
    if (!accessToken) {
      return false;
    }
    const user = await this.supabaseService.getUserByAccessToken(accessToken);
    if (!user) {
      throw new Error(`Invalid access token: ${accessToken}`);
    }
    return !!user;
  }
}
