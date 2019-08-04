import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddCardComponent } from '../add-card/add-card.component';
import { FormControl } from '@angular/forms';
import { AddCardService } from '../add-card.service';


export interface CityName {
  id: string;
  name: string;
}


@Component({
  selector: 'app-ask-city',
  templateUrl: './ask-city.component.html',
  styleUrls: ['./ask-city.component.css']
})


export class AskCityComponent implements OnInit {

  add_check: boolean = true;
  options: CityName[] ;


  constructor(
    public dialogRef: MatDialogRef<AddCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private addCardService: AddCardService
  ) {
  }


  ngOnInit() {
    this.addCardService.getOptions().subscribe(res => {
      this.options = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as CityName;
      });
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOk(): void {
    this.dialogRef.close(this.name.value);
  }

  name = new FormControl();
  newCity = new FormControl();

  toggleCity(): void {
    if (this.add_check) {
      this.add_check = false;
    } else {
      this.add_check = true;
    }
  }

  addCity(): void {
    this.toggleCity();
    this.addCardService.addOption(this.newCity.value);
  }

}
