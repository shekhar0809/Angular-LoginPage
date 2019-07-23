import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddCardComponent } from '../add-card/add-card.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ask-city',
  templateUrl: './ask-city.component.html',
  styleUrls: ['./ask-city.component.css']
})



export class AskCityComponent implements OnInit {


  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<AddCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOk(): void {
    this.dialogRef.close(this.name.value);
  }



  name = new FormControl();
  options: string[] = ['Delhi', 'Mumbai', 'Chennai', 'Noida'];

}
