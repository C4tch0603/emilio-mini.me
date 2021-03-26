import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AccountCollection} from './account-collection';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: AccountCollection[];

  constructor(firestore: AngularFirestore) {
    firestore.firestore.collection('accounts').onSnapshot(snapshot => {
      this.accounts = [];
      snapshot.docs.forEach(document => {
        const collection = new AccountCollection();
        collection.title = document.data().title;
        firestore.firestore.collection('accounts/' + document.id + '/values').onSnapshot(snap => {
          snap.docs.forEach(doc => {
            collection.accounts.push(doc.data());
          });
        });
        this.accounts.push(collection);
      });
    });
  }

  ngOnInit(): void {
  }

}
