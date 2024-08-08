
export interface IJwtRepository<T> {
  signToken(data: object): string,
  verifyToken(jwt: string): T | string
}