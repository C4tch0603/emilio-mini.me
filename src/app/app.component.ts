import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emilio-mini-me';

  constructor(public router: Router) {
  }

  selectedTab = 0;
  onSwitchTab(index: number): void {
    this.selectedTab = index;
  }
}
