import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MangasService {

  private URL = 'http://localhost:5000'

  constructor(private http:HttpClient) { 

  }
  getMangas(){
   return  this.http.get<any>(this.URL + '/mangas');
  }
  getManga(id:String){
   return 
  }
}
