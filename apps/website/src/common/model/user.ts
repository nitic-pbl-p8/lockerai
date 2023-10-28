export type User = {
  id: string;
  name: string;
  avatar_url: string;
};

export const mockUser = (user: Partial<User> = {}): User => ({
  id: 'e069eeb2-a239-44c7-9870-acc1af492264',
  name: 'John Doe',
  avatar_url: 'https://avatars.githubusercontent.com/u/1',
  ...user,
});
