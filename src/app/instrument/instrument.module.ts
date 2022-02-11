import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { createComponent } from '@angular/compiler/src/core';
import { ViewComponent } from './view/view.component';


const routes: Routes=[
  {
    path:"",
    component: InstrumentComponent,
    data:{ModuleName:'InstrumentModule'},
    children:[
      {
        path:"",
        redirectTo:"list",
      },
      {
        path:"list",
        component:ListComponent,
      },
      {
        path:"create",
        component:CreateComponent,
      },
      {
        path:"view/:id",
        component:ViewComponent,
      }
    ]
  }
]


@NgModule({
  declarations: [InstrumentComponent, ListComponent, CreateComponent, ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class InstrumentModule { }
