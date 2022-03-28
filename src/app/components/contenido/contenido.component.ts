import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { contenidosService } from 'src/app/services/contenidos.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {

  contenido:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _contenidosService: contenidosService) { 

    this.activatedRoute.params.subscribe( params => {
      console.log( params['id']);
      this.contenido = this._contenidosService.getContenido(params['id']);
    })
  }
}
