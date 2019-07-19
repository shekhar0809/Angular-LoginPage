import { Component, OnInit } from '@angular/core';
import { weatherTemplate } from '../weather.module';
import { AddCardService } from '../add-card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  
  ngOnInit() {
  }

  constructor(
    private addService: AddCardService   
  ) { }

  addCard() {
    this.addService.addCard()

    console.log(this.addService.cards)
  }



}
