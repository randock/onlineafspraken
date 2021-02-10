import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject('BEARER_TOKEN') private readonly bearer: string) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    return (
      Object.keys(req.headers).includes('authorization') &&
      req.headers['authorization'] ===
        `Bearer ${this.bearer}`
    );
  }
}
