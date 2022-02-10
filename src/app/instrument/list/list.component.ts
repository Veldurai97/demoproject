import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public _curd:CrudService) { }

  ngOnInit() {
    this.onGet()
  }

  address=[]

  onGet(){
    this._curd.listins()
    .subscribe(
      (sub)=>{
        this.address=sub.data
        console.log(sub)
      },
      (error)=>{
        console.log(error)
      }
      );
  }
}
