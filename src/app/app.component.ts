import { Component } from '@angular/core';
import {FirebaseAuthService} from './login/FirebaseAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emilio-mini-me';

  constructor(private auth: FirebaseAuthService) {
  }

  selectedTab = 0;
  onSwitchTab(index: number): void {
    this.selectedTab = index;
  }
}
