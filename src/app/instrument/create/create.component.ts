import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { realpath } from 'fs';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  constructor(private _create:CrudService) { }

  ngOnInit() {
  }
data={
  firstName:"",
  lastName:"",
  email:"",
  Applicantcompanyname:"",
  mobile:"",
  address:{
    addressLine1:"",
    addressLine2:"",
    state:"",
    city:"",
    country:"",
  }
}
 
  onSubmit(myForm: NgForm){
    console.log(myForm)
    this._create.createins(this.data).subscribe(rept=>{
      rept.data._id
    })
  }
}

 