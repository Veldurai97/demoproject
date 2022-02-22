import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SingupComponent } from './singup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'


const routes: Routes=[
  {
    path:"",
    component: LoginComponent,
    data:{moduleName:'LoginModule'},
    children:[
      {
        path:"",
        redirectTo:"signin",
      },
      {
        path:"signin",
        component:SigninComponent,
      },
      {
        path:"signup",
        component:SingupComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [LoginComponent, SingupComponent, SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,MatInputModule,MatIconModule
  ]
})
export class LoginModule { }
