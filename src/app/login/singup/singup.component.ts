import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signinForm: FormGroup

  constructor(private _create:CrudService) { 

    this.signinForm=new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'userName': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'mobile': new FormControl(null),
      Role:new FormGroup({
        'RoleId': new FormControl("620e927e0f6b532c1438d842")
      })
    })
  }

  ngOnInit() {
  }

  submit(){
    this._create.singup(this.signinForm.value).subscribe(loging=>{
      console.log(loging)
    })
  }

}
