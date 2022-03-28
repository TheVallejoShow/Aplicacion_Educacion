import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contenido-tarjeta',
  templateUrl: './contenido-tarjeta.component.html',
  styleUrls: ['./contenido-tarjeta.component.css']
})
export class ContenidoTarjetaComponent implements OnInit {

  @Input() contenido: any = {};
  @Input() indice?: number;

  @Output() contenidoSeleccionado: EventEmitter<number>;
  
  constructor( private router: Router) { 
    this.contenidoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verContenido(){
    //console.log(this.indice);
    this.router.navigate( ['/contenido', this.indice] )
    //this.contenidoSeleccionado.emit( this.indice )
  }

}
