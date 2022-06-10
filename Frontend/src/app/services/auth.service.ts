import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:5000'

  constructor(private http:HttpClient,private router : Router) { }

  registrarse(usuario: any){
    return this.http.post<any>(this.URL + '/registrarse',usuario)
  }
  iniciarSesion(usuario : any){
    return this.http.post<any>(this.URL + '/login',usuario)
  }
  logueado(){
    /*Comprueba si tiene token en el LocalStorage para ver si se ha logueado a alguna cuenta*/ 
    return !!localStorage.getItem('token')
  }
  cerrarSesion(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
