import { Component, OnInit } from '@angular/core';
import { contenidosService, Contenido } from 'src/app/services/contenidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenidos',
  templateUrl: './contenidos.component.html',
  styleUrls: ['./contenidos.component.css']
})
export class ContenidosComponent implements OnInit {

  contenidos:Contenido[] = [];
  
  constructor( private _contenidosService: contenidosService,
               private router: Router ) { }

  ngOnInit() {
    this.contenidos = this._contenidosService.getContenidos();
  }

  verContenido( idx: number){
    this.router.navigate( ['/contenido', idx] );
  }

}
