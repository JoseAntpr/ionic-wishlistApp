import { Item } from './Item'

export class Lista{
    nombre: string;
    terminada: boolean;
    items: Item[];

    constructor( nombre:string ){
        this.nombre = nombre;
        this.terminada = false;
    }

}