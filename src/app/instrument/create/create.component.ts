import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  constructor(private _create:CrudService, private router: Router, private route:ActivatedRoute) {}

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
vewpage
 
  onSubmit(myForm: NgForm){
    console.log(myForm)
    this._create.createins(this.data).subscribe(repat=>{
      this.router.navigate(['/view',repat.data._id]);
    })
  }
  onviewincreatpage(){
    this._create.viewcrud(this.onviewincreatpage).subscribe(
      showinview=>{
       this.vewpage=showinview.data
      })
  }
  
  onview(){
    this.route.paramMap.subscribe(
      params=>{
        this.vewpage=params.get('id')
        this.onviewincreatpage()
      }
    )
  }
}

 