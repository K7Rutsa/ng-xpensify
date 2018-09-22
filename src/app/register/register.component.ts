import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private _auth: AuthService) {}

  ngOnInit() {}

  registerForm(f) {
    this._auth.register(f.value.email, f.value.password);
  }
}
