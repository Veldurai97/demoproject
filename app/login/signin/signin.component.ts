import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup
  
  constructor(private _create:CrudService,private routes:Router) { 


    this.loginForm=new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }
  submit(){
    this._create.singin(this.loginForm.value).subscribe(sing=>{
      console.log(sing)
    })
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxZjUyOTBjZDU5NzQxM2RjM2YzMDFjIn0sImlhdCI6MTY0NjI4NTIwMiwiZXhwIjoxNjQ2Mjg4ODAyfQ.uN2xulGu9kcp88jH0cEEJ7pcKDa8ljtTMElalPNuVJg")
  }
  gotosingup(){
    this.routes.navigate(['/signup']);
  }
}
