import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  pictures: any[];

  constructor(firestore: AngularFirestore) {
    firestore.firestore.collection('photography').orderBy('time', 'desc').onSnapshot(snapshot => {
      this.pictures = [];
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data === null) {
          return;
        }
        this.pictures.push(data);
      });
    });
  }

  ngOnInit(): void {
  }

}
