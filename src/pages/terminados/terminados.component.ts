import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseoService } from '../../app/services/lista-deseos.service';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.html'
})

export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseoService, private navCtrl: NavController) { }

    ngOnInit() { }

    verDetalle(lista , id){
        this.navCtrl.push( DetalleComponent, { lista, id });
    }
}