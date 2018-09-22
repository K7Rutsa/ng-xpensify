import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class XpensesService {
  xpenseCol: AngularFirestoreCollection<any>;
  xpenseDoc: AngularFirestoreDocument<any>;
  expenses: Observable<any[]>;

  constructor(private _afs: AngularFirestore, private _router: Router) {
    this.xpenseCol = this._afs.collection('xpensify');
  }

  total = new Subject();

  getExpenses() {
    return (this.expenses = this.xpenseCol.snapshotChanges().pipe(
      map(change => {
        return change.map(d => {
          return {
            id: d.payload.doc.id,
            ...d.payload.doc.data()
          };
        });
      })
    ));
  }

  addExpense(data) {
    this.xpenseCol.add(data);
  }

  deleteExpense(id) {
    this.xpenseDoc = this._afs.doc(`xpensify/${id}`);
    this.xpenseDoc.delete();
  }

  updateExpense(id, updateObj) {
    this.xpenseDoc = this._afs.doc(`xpensify/${id}`);
    this.xpenseDoc.update(updateObj).then(() => {
      this._router.navigate(['']);
    });
  }
}
