import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
// import { DatosService } from '../../Services/datos.service';


@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

@Input() recibirObjeto;
@Input() nroPaginas;
@Input() paginaActual;
@Input() numeroBotones: number;

@Output() enviarPagina = new EventEmitter();
botonArr: any [] = [];
botonArreglo: any [] = [];
numeroPaginas: any;
cantBotones: any [] = [];
DatosBuscados: any [] = [];
cantidadIntroducida:any;
inicioArray = 0;
ini = 0;
fin = this.cantidadIntroducida;
finFinal: any;
BotonAtras: boolean;
BotonAdelante: boolean;
iniFin: any;
mostrarId = '';
buscadorActivo: boolean;
buscadorActivo1: boolean;
numero: any;
manejoVar = 0;
@HostListener('window:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  if (event.keyCode == 8) {
   this.recibirObjeto = this.recibirObjeto;
  }
}
  constructor(/*private service: DatosService*/) {
    // this.buscadorActivo = true;
    // this.buscadorActivo1 = false;
    // setTimeout(() => {
    //   this.cantidadIntroducida = this.numeroBotones;
    //   this.fin = this.numeroBotones;
    //   console.log(this.cantidadIntroducida);
    // }, 800);
    // this.cantidadPaginas();
    

  }
  ngOnInit() {
  }
  cantidadPaginas() {
    setTimeout(() => {
    this.numeroPaginas = this.nroPaginas;
    for (let i = 1; i <= this.nroPaginas; i++) {
      let nuevo = {
        id: i
      };
      this.botonArr.push(nuevo);
    }
    this.botonArreglo = this.botonArr;
    console.log(this.botonArreglo);
    this.irAdelante();
  }, 1000);
  };

  CambiarPagina(item) {
  this.mostrarId = '';
  this.buscadorActivo1 = false;
  this.buscadorActivo = true;
  this.numero = item;
  this.enviarPagina.emit(item);

  }
nuevoEvento(){
  console.log("soy un evento que euire mostrarse");
}


  irAdelante() {
    this.mostrarId = '';
    this.buscadorActivo1 = false;
    this.buscadorActivo = true;
    this.BotonAdelante = true;
    this.BotonAtras = true;
    if (this.manejoVar == 2) {
    this.ini = this.ini + this.cantidadIntroducida;
    this.fin = this.fin + this.cantidadIntroducida; 
    }
    console.log(this.ini, this.fin);
    console.log(this.manejoVar);
    this.BotonAtras = true;
    if ( this.cantidadIntroducida > this.nroPaginas) {
      this.cantBotones = this.botonArreglo;
  } else if (this.fin > this.nroPaginas) {
           this.finFinal = this.nroPaginas - this.ini;
           if (this.cantidadIntroducida > this.finFinal && this.ini < this.fin){
                this.ini = this.ini;
                this.fin = this.nroPaginas;
                console.log(this.ini, this.fin);
                this.cantBotones = this.botonArreglo.slice(this.ini, this.fin);
                this.BotonAdelante = false;
            }
  } else{
    if (this.ini == 0) {
      this.BotonAtras = false;
    }
    let datosmmmm = this.botonArreglo.slice(this.ini, this.fin);
    this.cantBotones = datosmmmm;
    this.ini = this.ini + this.cantidadIntroducida;
    this.fin = this.fin + this.cantidadIntroducida;
  }
    this.manejoVar = 1;
}
irAtras() {
  this.mostrarId = '';
  this.buscadorActivo1 = false;
  this.buscadorActivo = true;
  console.log(this.manejoVar);
  console.log(this.ini, this.fin);
  this.BotonAdelante = true;
  if (this.manejoVar == 1) {
  this.ini = this.ini - this.cantidadIntroducida;
  this.fin = this.fin - this.cantidadIntroducida; 
  }
  let final = this.numeroPaginas % this.cantidadIntroducida;
  if (this.ini < 0) {
    this.ini = this.nroPaginas - this.cantidadIntroducida;
    this.fin = this.nroPaginas;
    this.cantBotones = this.botonArreglo.slice(this.ini, this.fin);

 } else if(this.fin == this.numeroPaginas && final != 0){
  this.fin = this.numeroPaginas - final;
  this.ini = this.fin - this.cantidadIntroducida;
  console.log(this.fin, this.ini);
  this.cantBotones = this.botonArreglo.slice(this.ini, this.fin);

} else {
  this.ini = this.ini - this.cantidadIntroducida;
  this.fin = this.fin - this.cantidadIntroducida;
  if (this.ini == 0) {
    this.BotonAtras = false;
  }
  this.cantBotones = this.botonArreglo.slice(this.ini, this.fin);
}
  this.manejoVar = 2;
}
irAtrasFinal() {
  this.mostrarId = '';
  this.buscadorActivo1 = false;
  this.buscadorActivo = true;
  this.BotonAdelante = true;
  this.ini = this.inicioArray;
  this.fin = this.cantidadIntroducida;
  this.cantBotones = this.botonArreglo.slice(this.ini, this.fin);
  this.BotonAtras = false;
  this.manejoVar = 2;
}

irAdelanteFinal() {
  this.mostrarId = '';
  this.buscadorActivo1 = false;
  this.buscadorActivo = true;

  this.BotonAdelante = false;
  let final = this.numeroPaginas % this.cantidadIntroducida;
  if (final == 0) {
  this.BotonAtras = true;
  this.ini = this.numeroPaginas - this.cantidadIntroducida;
  this.fin = this.numeroPaginas;
  this.cantBotones = this.botonArreglo.slice(this.ini, this.fin);
} else {
  this.BotonAtras = true;
  this.ini = this.numeroPaginas - final;
  this.fin = this.numeroPaginas;
  console.log(this.ini, this.fin);
  this.cantBotones = this.botonArreglo.slice(this.ini, this.fin);
}
  this.manejoVar = 0;
}

verDatos(event) {
  this.buscadorActivo1 = true;
  this.buscadorActivo = false;
  console.log(event);
  let termino = event.target.value;
  console.log(termino);
  let nuevoArray: any[] = [];
  if (isNaN(termino)) {
    console.log( "verificando valor", termino);
    termino = termino.toLowerCase();
    console.log(termino);
  // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.recibirObjeto.length; i++ ) {
      let peliculas = this.recibirObjeto[i];
      let title = peliculas.title.toLowerCase();
      if ( title.indexOf(termino) >= 0 ) {
        nuevoArray.push(peliculas);
        console.log(nuevoArray);
      }
    }
  } else {
      termino = termino.toString();
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.recibirObjeto.length; i++) {
        let peliculas = this.recibirObjeto[i];
        let id = peliculas.id.toString();
        if ( id.indexOf( termino ) >= 0 ) {
          nuevoArray.push( peliculas );
        }
      }
    }
  this.DatosBuscados = nuevoArray;
  console.log(this.DatosBuscados);
}
// metodo para recargar los dos inputs con los datos escogidos
/*enviarObjeto(item) {
  this.recibirObjeto.emit(item);
  this.mostrarId = item.id;
  this.mostrarTitulo = item.title;
  this.metodoMostrarOcultar();
}*/
}

