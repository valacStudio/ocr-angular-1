import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  constructor(private authService: AuthService, private router : Router ) { }

  ngOnInit(): void {
  }

  onSubmitForm(loginForm :NgForm): void {
    console.log(loginForm.value);
    this.authService.login(loginForm.value.username, loginForm.value.password);
    this.router.navigateByUrl('/facesnaps');
  }

}
