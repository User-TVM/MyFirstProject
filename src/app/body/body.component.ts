import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import {PortalModule} from '@angular/cdk/portal';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' }},{provide:MAT_CHECKBOX_DEFAULT_OPTIONS,useValue:{color:'primary'}}]
 
})
export class BodyComponent implements OnInit {
  currentYear = new Date().getFullYear();
  date = new FormControl(new Date(this.currentYear-20,0,1));


  profileForm:FormGroup;
  constructor(private fb:FormBuilder) {

    this.profileForm=fb.group(
    {

     'memberName':new FormControl(),
     'memberRelationship': new FormControl(),
     'memberAge': new FormControl(),
     'memberOccupation': new FormControl()


    });
  }

  ngOnInit() {
    
  }
}
