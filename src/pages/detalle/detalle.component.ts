import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Lista } from '../../app/classes/Lista';
import { Item } from '../../app/classes/Item';

import { ListaDeseoService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'page-detalle',
    templateUrl: 'detalle.html',
    styles: ['detalle.scss']
})

export class DetalleComponent implements OnInit {
    id: number;
    lista: Lista;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public _listaDeseoService: ListaDeseoService,
        public alertCtrl: AlertController
    ) { 
        this.id = this.navParams.get("id");
        this.lista = this.navParams.get("lista");
    }

    ngOnInit() { }

    actualizar(item:Item){
        item.completado = !item.completado;

        let todoMarcados = true;
        for(let item of this.lista.items){
            if(!item.completado){
                todoMarcados = false;
                break;
            }
        }
        this.lista.terminada = todoMarcados;
        this._listaDeseoService.actualizarData();
    }

    borrarItem(){
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿ Esta seguro que desea eliminar la lista?',
            buttons: [
              'Cancelar',
              {
                text: 'Eliminar',
                handler: () => {
                  this._listaDeseoService.eliminarLista( this.id )
                  this.navCtrl.pop();
                }
              }
            ]
          });
          confirm.present();
    }
}