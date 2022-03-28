import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['Email', 'fname', 'lname', 'avatar','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private api:ApiService,private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.getDetails()
    
  }

  getPagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    
  }
  viewData(Viewdata:any){
    this.dialog.open(ViewComponent,{data:Viewdata,height:"50%",width:"50%"})
  }
getDetails(){
  this.api.getUsers().subscribe((response:any):any=>{
    if(response){
      localStorage.setItem('Response Data',JSON.stringify( response['data']));
      let data = response['data']
      this.dataSource = new MatTableDataSource(data);
      this.getPagination();
    }
  })
}
}


