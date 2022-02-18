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

  
  constructor(private _create:CrudService, private router: Router, private route:ActivatedRoute) {
    this.onshowinviewpage()
    this.mycountry()
  }

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
valuesinviewpage
statevariable:any;
  onSubmit(myForm: NgForm){
    console.log(myForm)
    // this._create.createins(this.data).subscribe(repat=>{
    //   this.router.navigate(['/view',repat.data._id]);
    // })
    if(this.valuesinviewpage==null){
      this._create.createins(this.data).subscribe(repat=>{
        this.router.navigate(['/view',repat.data._id])
        })
      }
        else{
          this._create.update(this.valuesinviewpage,this.data).subscribe(repat=>{
            console.log(repat)
            this.router.navigate(['/view',this.valuesinviewpage])
          }
          )
        }
  }
  onview(){
    this._create.viewcrud(this.valuesinviewpage).subscribe(
      view=>{
        this.data=view.data
      })
  }
  onshowinviewpage(){
    this.route.paramMap.subscribe(
      params=>{
        this.valuesinviewpage=params.get('id')
       if(this.valuesinviewpage!==null){
        this.onview()
       }
      })
  }
   countrylist = []
  mycountry(){
    this._create.allcountry().subscribe(
      countryresp=>{
        console.log(countryresp)
        this.countrylist=countryresp
      }
    )
}
 statelist=[];
  mystate(cnty){
    this.statevariable=cnty.target.value
    this._create.allstate(cnty.target.value).subscribe(
      staterep=>{
        console.log(staterep)
      this.statelist=staterep
      }
    )
  }
  citylist=[]
  mycity(city){
    this._create.allcity(city.target.value,this.statevariable).subscribe(
      cityrep=>{
        console.log(cityrep)
        this.citylist=cityrep
      })
  }
}
