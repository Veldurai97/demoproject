import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  siginForm: FormGroup

  constructor() { 

    this.siginForm=new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'userName': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'mobile': new FormControl(null),
      'Role': new FormControl(null)
    })
  }

  ngOnInit() {
  }

}
