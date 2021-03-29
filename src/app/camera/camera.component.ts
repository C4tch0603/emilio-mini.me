import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  camera: any;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) {
    this.loadCamera(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  loadCamera(name): void {
    this.firestore.firestore.collection('cameras').doc(name).onSnapshot(snapshot => {
      const data = snapshot.data();
      if (data === null) {
        return;
      }
      this.camera = data;
    });
  }

}
