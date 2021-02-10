import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    return (
      Object.keys(req.headers).includes('authorization') &&
      req.headers['authorization'] ===
        'Bearer NuU-G_R@9?KZNY@!!GLcsyFTqB6@gt4KKNfF829MN??_F?85fedN@65AF+7p!!pk'
    );
  }
}
