import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-link-shortener',
  templateUrl: './link-shortener.component.html',
  styleUrls: ['./link-shortener.component.css']
})
export class LinkShortenerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, private router: Router) {
    this.redirect(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  redirect(url): void {
    this.firestore.firestore.collection('short').doc(url).get().then(doc => {
      if (!doc.exists) {
        this.router.navigateByUrl('/s');
        console.error('Not found');
      } else {
        window.location.href = doc.data().link;
      }
    });
  }
}
