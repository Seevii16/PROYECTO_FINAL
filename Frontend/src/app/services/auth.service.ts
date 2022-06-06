import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:5000'

  constructor(private http:HttpClient) { }

  registrarse(usuario: any){
    return this.http.post<any>(this.URL + '/registrarse',usuario)
  }
  iniciarSesion(usuario : any){
    return this.http.post<any>(this.URL + '/login',usuario)
  }
}
