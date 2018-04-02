import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseoService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'page-pendiente',
    templateUrl: 'pendientes.html',
    styles: ['pendientes.scss']
})

export class PendientesComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseoService, private navCtrl: NavController) { }

    ngOnInit() { }

    navegarAgregar(){
        this.navCtrl.push(AgregarComponent);
    }

    verDetalle(lista , id){
        this.navCtrl.push( DetalleComponent, { lista, id });
    }
}