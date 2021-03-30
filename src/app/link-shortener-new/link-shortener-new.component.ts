import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-link-shortener-new',
  templateUrl: './link-shortener-new.component.html',
  styleUrls: ['./link-shortener-new.component.css']
})
export class LinkShortenerNewComponent implements OnInit {

  link = '';

  shortened: string[];

  constructor(private firestore: AngularFirestore) {
    this.shortened = [];
  }

  ngOnInit(): void {
  }

  updateInput(event): void {
    this.link = event.target.value;
  }

  random(): string {
    let r;
    do {
      r = Math.random().toString(36).substring(9);
    } while (r.length !== 4);
    return r;
  }

  shorten(): void {
    this.firestore.firestore.collection('short').get().then(docCollection => {
      for (const doc of docCollection.docs) {
        if (doc.exists) {
          if (doc.data().link === this.link) {
            this.shortened.push(doc.id);
            return;
          }
        }
      }
      console.log('No equal URL found! Creating new...');

      const r = this.random();
      this.firestore.firestore.collection('short').doc(r).get().then(doc => {
        if (doc.exists) {
          this.shorten();
        } else {
          this.shortened.push(r);
          this.firestore.firestore.collection('short').doc(r).set({
            link: this.link,
            timestamp: new Date(),
            persistent: false
          });
        }
      });
    });
  }

}
