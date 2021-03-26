import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseAuthService} from '../login/FirebaseAuth.service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  editConfirm: string;
  editable: boolean;
  editTitle: string;
  editVersion: number;
  editDate: Date;
  editFeaturesAdded: string;
  editFeaturesChanged: string;
  editFeaturesFixed: string;

  editFeaturesAddedSize: number;
  editFeaturesChangedSize: number;
  editFeaturesFixedSize: number;

  changelogs: any[];

  constructor(private firestore: AngularFirestore, public auth: FirebaseAuthService) {
    this.initEdit();
    this.editable = true;

    firestore.firestore.collection('changelog').orderBy('date', 'desc').onSnapshot(snapshot => {
      this.changelogs = [];
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data === null) {
          return;
        }
        this.changelogs.push(data);
      });
    });
  }

  ngOnInit(): void {
  }

  initEdit(): void {
    this.editConfirm = 'Create';
    this.editTitle = '';
    this.editVersion = 0;
    this.editDate = new Date();
    this.editFeaturesAdded = '';
    this.editFeaturesChanged = '';
    this.editFeaturesFixed = '';
    this.editFeaturesAddedSize = 1;
    this.editFeaturesChangedSize = 1;
    this.editFeaturesFixedSize = 1;
  }

  confirm(): void {
    this.firestore.firestore.collection('changelog').doc(this.editTitle).set({
      title: this.editTitle,
      date: this.editDate,
      added: this.editFeaturesAdded.split('\n').filter(s => s.trim()),
      changed: this.editFeaturesChanged.split('\n').filter(s => s.trim()),
      fixed: this.editFeaturesFixed.split('\n').filter(s => s.trim())
    }, { merge: true })
      .then(() => {
        console.log('Success!', this.editTitle);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }

  reset(): void {
    this.editable = true;
    this.initEdit();
  }

  saveDate(event): void {
    this.editDate = new Date(event.target.value);
  }

  saveTitle(event): void {
    this.editTitle = event.target.value;
  }

  autoSizeAdded(event): void {
    this.editFeaturesAddedSize = event.target.value.split('\n').length;
    this.editFeaturesAdded = event.target.value;
  }

  autoSizeChanged(event): void {
    this.editFeaturesChangedSize = event.target.value.split('\n').length;
    this.editFeaturesChanged = event.target.value;
  }

  autoSizeFixed(event): void {
    this.editFeaturesFixedSize = event.target.value.split('\n').length;
    this.editFeaturesFixed = event.target.value;
  }

  versionSelect(event): void {
    this.initEdit();
    if (event.target.value === 'New') {
      this.editable = true;
      return;
    }

    this.editConfirm = 'Update';
    this.editable = false;
    this.editTitle = event.target.value;
    this.changelogs.forEach(changelog => {
      if (changelog.title !== this.editTitle) {
        return;
      }
      this.editDate = changelog.date.toDate();

      this.editFeaturesAddedSize = changelog.added.length + 1;
      this.editFeaturesChangedSize = changelog.changed.length + 1;
      this.editFeaturesFixedSize = changelog.fixed.length + 1;

      changelog.added.forEach(added => {
        this.editFeaturesAdded += added + '\n';
      });
      changelog.changed.forEach(changed => {
        this.editFeaturesChanged += changed + '\n';
      });
      changelog.fixed.forEach(fixed => {
        this.editFeaturesFixed += fixed + '\n';
      });
    });
  }
}
