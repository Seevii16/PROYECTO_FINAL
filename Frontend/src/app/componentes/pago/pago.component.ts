import { Component, OnInit } from '@angular/core';
import { PagosService } from 'src/app/services/pagos.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  pago = {
    usuarioNombre:'',
    usuarioEmail:'',
    usuarioContra:''
  }

  constructor( 
    private pagosService : PagosService,
    private router : Router) {
   

   }

  ngOnInit(): void {
  }

}
