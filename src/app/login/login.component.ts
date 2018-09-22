import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}

  loginForm(f) {
    this._authService.login(f.value.email, f.value.password);
  }
}
