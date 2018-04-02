import { Injectable } from '@angular/core';

import { Lista } from '../classes/Lista';
import { Item } from '../classes/Item';

@Injectable()
export class ListaDeseoService {

    listas: Lista[] = [];

    constructor() {
        this.cargarData();
        console.log("Servicio inicializado!!");
     }

     actualizarData(){
        localStorage.setItem( "data", JSON.stringify(this.listas) )
     }

     cargarData(){
         if(localStorage.getItem("data")){
            this.listas = JSON.parse(localStorage.getItem("data"));
         }
     }

     agregarLista( lista: Lista ){
        this.listas.push(lista);
        this.actualizarData();
     }

     eliminarLista(id: number){
         this.listas.splice(id,1);
         this.actualizarData();
     }
}