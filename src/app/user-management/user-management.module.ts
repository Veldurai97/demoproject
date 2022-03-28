import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

const routes:Routes=[
  {
    path:'',
    component:UserManagementComponent,
    children:[
      {
        path:'',
        redirectTo:'list'
      },
      {
        path:'list',
        component:ListComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    UserManagementComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents:[ViewComponent]
})
export class UserManagementModule { }
