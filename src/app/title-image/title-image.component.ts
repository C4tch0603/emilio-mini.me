import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.css']
})
export class TitleImageComponent implements OnInit, OnChanges {

  @Input() selected?: string;

  src: string;
  alt: string;

  constructor() { }

  ngOnChanges(): void {
    switch (this.selected) {
      case '/home':
        this.src = 'assets/code.svg';
        this.alt = 'Home';
        break;
      case '/projects':
        this.src = 'assets/street.svg';
        this.alt = 'Projects';
        break;
      case '/accounts':
        this.src = 'assets/social.svg';
        this.alt = 'Accounts';
        break;
      case '/changelog':
        this.src = 'assets/developer.svg';
        this.alt = 'Changelog';
        break;
    }
  }

  ngOnInit(): void {
  }

}
