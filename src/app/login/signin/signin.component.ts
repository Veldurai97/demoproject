import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup

  constructor(private routes:Router) { 


    this.loginForm=new FormGroup({
      'Email': new FormControl(null),
      'Password': new FormControl(null)
    })
  }

  ngOnInit() {
  }
}
