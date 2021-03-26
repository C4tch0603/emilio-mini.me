import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.css']
})
export class TitleImageComponent implements OnInit {

  @Input() index?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
