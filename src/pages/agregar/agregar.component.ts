import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular'
import { Lista } from '../../app/classes/Lista';
import { Item } from '../../app/classes/Item';
import { ListaDeseoService } from '../../app/services/lista-deseos.service';




@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.html'
})

export class AgregarComponent implements OnInit {

    nombreLista:string = "";
    nombreItem:string;

    items: Item[] = [];

    constructor(
        public _listaDeseosService: ListaDeseoService,
        public navCtrl: NavController,
        public alertCtrl: AlertController
    ) { }

    ngOnInit() { }

    agregar(){
        if(this.nombreItem.length == 0 ){
            return;
        }

        let item = new Item();
        item.nombre = this.nombreItem;

        this.items.push( item );
        this.nombreItem = '';
    }

    eliminarItem( id:number ){
        console.log("Eliminar el elemento", id);
        this.items.splice(id, 1);
    }

    guardarLista(){
        if( this.nombreLista.length == 0){
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario!',
                buttons: ['OK']
              });
              alert.present();
              return;
        }

        let lista = new Lista( this.nombreLista );
        lista.items = this.items;

        this._listaDeseosService.agregarLista( lista );
        this.navCtrl.pop();
    }
}