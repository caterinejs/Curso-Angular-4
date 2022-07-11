import {Component} from '@angular/core';
import {RopaService} from 'app/Service/ropa.service';

@Component ({
    selector: "Home",
    templateUrl: './Home.component.html',
    providers: [RopaService]
})


export class HomeComponent {
    public titulo= "pagina principal";
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;

    public fecha;
    public nombre = "CATERINE jaramillo SanchEZ"

    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date(2022, 6, 8); //los meses empiezan en cero//
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this._ropaService.prueba('camiseta Nike'));
    }
      
    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
        
    }
}