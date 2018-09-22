import { XpensesService } from './../xpenses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private _activeRoute: ActivatedRoute,
    private _xpenseService: XpensesService
  ) {}

  id: string;
  item: string;
  amount: string;

  ngOnInit() {
    this._activeRoute.params.subscribe(p => {
      this.id = p['id'];
    });
    this._activeRoute.queryParams.subscribe(p => {
      this.item = p['item'];
      this.amount = p['amount'];
    });
  }

  formSubmitUpdate(f) {
    if (f.value.item && f.value.amount) {
      const update = {
        item: f.value.item,
        amount: f.value.amount
      };

      this._xpenseService.updateExpense(this.id, update);
    } else {
      alert('Fields cannot be blank !');
    }
  }
}
