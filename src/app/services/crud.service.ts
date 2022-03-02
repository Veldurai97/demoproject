import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CrudService {
   Headers=new HttpHeaders({
    "X-CSCAPI-KEY":"c2NKdXQwRTVhTlltMU5DREJJRlhFVjVETGFEMDZySVAyYlp6d0g5bg=="
  })
   loginform = new HttpHeaders({
         "token":localStorage.getItem("token")
  }) 
  
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

  viewcrud(detealis:any):Observable<any>{
    return this._httpClinet.get("http://localhost:3000/crudOperation/get_particular_data_from_database_table/" +detealis)
  }
  update(id,details:any):Observable<any>{
    return this._httpClinet.put("http://localhost:3000/crudOperation/update_Data_in_Database_table/"+id,details)
  }
  allcountry():Observable<any>{
    // let Headers=new HttpHeaders({
    //   "X-CSCAPI-KEY":"c2NKdXQwRTVhTlltMU5DREJJRlhFVjVETGFEMDZySVAyYlp6d0g5bg=="
    // })
      return this._httpClinet.get("https://api.countrystatecity.in/v1/countries", {headers:this.Headers})
  }
  allstate(ciso:any):Observable<any>{
      return this._httpClinet.get(`https://api.countrystatecity.in/v1/countries/${ciso}/states`, {headers:this.Headers})
  }
  allcity(siso,ciso:any):Observable<any>{
      return this._httpClinet.get(` https://api.countrystatecity.in/v1/countries/${ciso}/states/${siso}/cities`, {headers:this.Headers})
  }
  singup(details:any):Observable<any>{
    return this._httpClinet.post("http://localhost:3000/api/signup", details, {headers:this.loginform})
  }
  singin(details:any):Observable<any>{
    return this._httpClinet.post("http://localhost:3000/api/login",details,{headers:this.loginform})
  }
}






       
      