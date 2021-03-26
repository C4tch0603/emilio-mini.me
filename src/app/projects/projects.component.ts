import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[];

  constructor(firestore: AngularFirestore) {
    firestore.firestore.collection('projects').orderBy('time', 'desc').onSnapshot(snapshot => {
      this.projects = [];
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data === null) {
          return;
        }
        this.projects.push(data);
      });
    });
  }

  ngOnInit(): void {
  }

  redirect(link): void {
    if (!link.trim()) {
      return;
    }
    window.location.href = link;
  }

}
