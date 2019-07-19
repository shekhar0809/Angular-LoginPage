import { Component, OnInit, OnDestroy } from '@angular/core';
import { weatherTemplate } from '../weather.module';
import { AddCardService } from '../add-card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  cards: weatherTemplate[]

  ngOnInit() {
    this.cards = this.addSevice.cards
  }

  constructor(
    private addSevice: AddCardService   
  ) { }



}