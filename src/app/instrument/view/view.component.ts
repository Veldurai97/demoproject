import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route:ActivatedRoute, private _curd:CrudService) {  
    this.onshowninviewpage()
   }

  ngOnInit() {
  }

  valuesinviewpage
  dummyvariables
  onview(){
    this._curd.viewcrud(this.valuesinviewpage).subscribe(
      view=>{
        this.dummyvariables=view.data
      }
    )
  }

  onshowninviewpage(){
    this.route.paramMap.subscribe(
      params=>{
        this.valuesinviewpage=params.get('id')
        console.log(params)
      this.onview()
      })
  }
}
