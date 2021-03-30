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
    if (this.selected.startsWith('/home#') || this.selected === '/home') {
      this.src = 'code';
      this.alt = 'Home';
    }
    else if (this.selected.startsWith('/accounts#') || this.selected === '/accounts') {
      this.src = 'social';
      this.alt = 'Accounts';
    }
    else if (this.selected.startsWith('/photography#') || this.selected === '/photography' ||
      this.selected.startsWith('/camera#') || this.selected === '/camera') {
      this.src = 'cam';
      this.alt = 'Photography';
    }
    else if (this.selected.startsWith('/changelog#') || this.selected === '/changelog') {
      this.src = 'developer';
      this.alt = 'Changelog';
    }
    else if (this.selected.startsWith('/projects#') || this.selected === '/projects') {
      this.src = 'street';
      this.alt = 'Projects';
    }
    else if (this.selected.startsWith('/s#') || this.selected === '/s' ||
      this.selected.startsWith('/s/')) {
      this.src = 'link';
      this.alt = 'URL shortener';
    }
  }

  ngOnInit(): void {
  }

}
