import { Component, OnInit } from '@angular/core';
import { weatherTemplate } from '../weather.module';
import { AddCardService } from '../add-card.service';
import { MatDialog } from '@angular/material';
import { AskCityComponent } from '../ask-city/ask-city.component';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  ngOnInit() {
  }

  constructor(
    private addService: AddCardService,
    public dialog: MatDialog
  ) { }

  addCard() {
    this.openDialog()
  }


  openDialog(): void {

    let city: string
    const dialogRef = this.dialog.open(AskCityComponent,
      {
        width: 'auto',
        height: 'auto',
        data: { city: city }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      city = result;
      this.addService.addCard(city)
    });
    
  }



}
