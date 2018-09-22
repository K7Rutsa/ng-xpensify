import { XpensesService } from './../xpenses.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xpenses',
  templateUrl: './xpenses.component.html',
  styleUrls: ['./xpenses.component.css']
})
export class XpensesComponent implements OnInit {
  constructor(
    private _xpensesService: XpensesService,
    private _router: Router
  ) {}

  expenses: any[] = [];
  noXpense: boolean = false;

  ngOnInit() {
    this._xpensesService.getExpenses().subscribe(d => {
      if (d.length === 0) {
        this.noXpense = true;
      } else {
        this.noXpense = false;
      }

      this.expenses = d;

      let total = d.reduce((total, xpenses) => {
        return total + Number(xpenses.amount);
      }, 0);

      this._xpensesService.total.next(total);
    });
  }

  formSubmitAdd(f) {
    if (f.value.item && f.value.amount) {
      this._xpensesService.addExpense({
        item: f.value.item,
        amount: f.value.amount
      });
    } else {
      alert('Fields cannot be blank !');
    }

    f.reset();
  }

  deleteItem(id) {
    this._xpensesService.deleteExpense(id);
  }

  updateItem(expense) {
    this._router.navigate(['edit', expense.id], {
      queryParams: { item: expense.item, amount: expense.amount }
    });
  }
}
