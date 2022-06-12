import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {


  usuario = {
    usuarioNombre:'',
    usuarioEmail:'',
    usuarioContra:'',
    usuarioApellido1:'',
    usuarioApellido2:'',
    usuarioTel:0,
    usuarioUserName:'',
    usuarioEdad:0,
    usuarioDireccion:'',
    usuarioPais:'',
  }

  constructor(
    private authService : AuthService,
    private router : Router) { }

  ngOnInit(){
  }
  registrarse(){
    this.authService.registrarse(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/perfil'])
      },
      err => {
        console.log(err)
      }
    )
  }
  }


