import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup
  
  constructor(private _create:CrudService) { 


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
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBmZDgwMTI2MTQ4MjY0Zjg0NjNhYjVjIn0sImlhdCI6MTYyNzIzMDQwOSwiZXhwIjoxNjI3MjM0MDA5fQ.aj1J192lfRwbgqCVos3RSylVJpZITnfU7Ktlh82tCz0")
  }
}
