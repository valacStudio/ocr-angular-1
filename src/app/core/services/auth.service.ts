import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private token! : string;

  getToken(): string {
    return this.token;
  }

  login(username: string, password: string) {
    this.token = username+password;
  }
}
