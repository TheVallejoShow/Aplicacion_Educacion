import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contenidosService } from 'src/app/services/contenidos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  contenidos:any = []
  termino!:string;
  
  constructor( private activatedRoute: ActivatedRoute,
               private _contenidosService: contenidosService) { 

    }
    
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.contenidos = this._contenidosService.buscarContenidos( params ['termino']);
      console.log(this.contenidos);
      
    });
  }

}
