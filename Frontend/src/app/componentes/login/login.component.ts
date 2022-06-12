import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    usuarioNombre:'',
    usuarioEmail:'',
    usuarioContra:''
  }

  constructor( 
    private authService : AuthService,
    private router : Router) {
   

   }

  ngOnInit(){
  }
  iniciarSesion(){
    this.authService.iniciarSesion(this.usuario)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/mangas'])
      },
      err => {
        console.log(err)
      }
    )
  }
}
