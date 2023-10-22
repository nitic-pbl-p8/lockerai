export type { DeepNonNullable, DeepReadonly } from 'ts-essentials';

export type ImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};
