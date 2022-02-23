import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup
  
  constructor() { 


    this.loginForm=new FormGroup({
      'Email': new FormControl(null,[Validators.required, Validators.email]),
      'Password': new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }
}
