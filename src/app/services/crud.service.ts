import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _httpClinet: HttpClient) { }

  createins(details:any):Observable<any>{
    return this._httpClinet.post("http://localhost:3000/crudOperation/create_Data_to_push_in_Database_table",details)
  }

  listins():Observable<any>{
    return this._httpClinet.get("http://localhost:3000/crudOperation/get_all_data_from_database_table")
  }

  deletelist(detealis:any):Observable<any>{
    return this._httpClinet.delete("http://localhost:3000/crudOperation/delete_Data_in_Database_table/"+detealis)
  }
}





