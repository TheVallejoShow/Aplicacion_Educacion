import { Injectable } from '@angular/core';

@Injectable()
export class contenidosService {

    private contenidos: Contenido[] = 
    [
      {
        nombre: "Curso de Inglés",
        desc: "Logra La Fluidez Que Siempre Soñaste Y Accede A Un Mundo De Oportunidades ¡No Esperes Más! Aprende Inglés Fácil Y Rápido Con Nuestro Método Innovador ¡Conócelo Ahora!",
        img: "assets/img/english.png",
        creado: "2022-01-24",
        categoria: "Idiomas",
        estado:"Disponible"
      },
      {
        nombre: "Curso de Programación",
        desc: "Conviértete en un Programador Experto aprendiendo con Profesores Líderes en la Industria. Anímate a Potenciar tu Carrera con nuestros Cursos Online y en Vivo dictados por Expertos.",
        img: "assets/img/programacion.jpg",
        creado: "1939-05-01",
        categoria: "Tecnología",
        estado:"No Disponible"
      },
      {
        nombre: "Mil años de soledad",
        desc: "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español",
        img: "assets/img/milaños.jpg",
        creado: "1967",
        categoria: "Novela",
        estado: "Disponible"
      },
      {
        nombre: "La biblia - Reina-Valera",
        desc: "La Reina-Valera es una de las traducciones de la Biblia al español más frecuentemente utilizadas entre los protestantes hispanohablantes",
        img: "assets/img/biblia.jpg",
        creado: "1960",
        categoria: "Libro",
        estado: "Disponible"
      },
      {
        nombre: "Natación",
        desc: "La natación es un deporte que consiste en el desplazamiento de una persona en el agua, sin que esta toque el suelo.​ Es regulado por la Federación Internacional de Natación",
        img: "assets/img/natacion.jpg",
        creado: "2015-06-10",
        categoria: "Deporte",
        estado: "No Disponible"
      },
      {
        nombre: "Batería",
        desc: "La batería es un conjunto de instrumentos musicales de percusión usado por muchas agrupaciones musicales. El término «batería» también se refiere al músico que toca estos instrumentos, al igual que el término baterista, ambos equivalentes.​​ ",
        img: "assets/img/bateria.jpg",
        creado: "2021-01-24",
        categoria: "Música",
        estado: "No Disponible"
      },
    ];


    constructor() {
        console.log("Servicio listo")
    }
    
    getContenidos():Contenido[] {
        return this.contenidos
    }

    getContenido( idx: number ){
        return this.contenidos[idx]
    }

    buscarContenidos( termino: string ) {
        
        let contenidoArr:Contenido[] = [];
        
        termino = termino.toLowerCase();

        for ( let i = 0; i < this.contenidos.length; i++ ){
          
          let contenido = this.contenidos[i];

          let nombre = contenido.nombre.toLowerCase();

            if ( nombre.indexOf( termino ) >= 0 ){
              contenido.idx = i;
              contenidoArr.push( contenido )
            }
        }

        return contenidoArr;
    }



}

export interface Contenido {
    nombre: string,
    desc: string,
    img: string,
    creado: string,
    categoria: string,
    estado: string,
    idx?: number
}