import { AuthService } from './auth.service';
import { XpensesService } from './xpenses.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private _xpensesService: XpensesService,
    private _authService: AuthService
  ) {}
  totalExpenses: {};
  loggedIn: boolean = false;

  ngOnInit() {
    console.log('ngOnInit');
    this._xpensesService.total.subscribe(d => {
      this.totalExpenses = d;
    });

    this._authService.authState().subscribe(d => {
      if (d) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });

    // this._xpensesService.getExpenses().subscribe(d => {
    //   let total = d.reduce((total, xpenses) => {
    //     return total + Number(xpenses.amount);
    //   }, 0);

    //   this.totalExpenses = total;
    // });
  }

  logout() {
    this._authService.logout();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
