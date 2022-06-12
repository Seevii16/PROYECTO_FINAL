import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class PagosService {
  private URL = 'https://yorozuyamangas.herokuapp.com'

  constructor(private http:HttpClient,private router : Router) { }
  comprar(usuario: any){
    return this.http.post<any>(this.URL + '/agregarPago',usuario)
  }
}
