import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private authService:AuthService){

    }
canActivate(router:ActivatedRouteSnapshot,state :RouterStateSnapshot){
  return this.authService.isAuthenticated();
}
}