import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService,
              private router : Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    console.log(!!this.authService.getToken())
    if(this.authService.getToken()){
      return true;
    }else {
      this.router.navigateByUrl("/auth/login");
      return false;
    }
  }
}
