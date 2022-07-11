import {Component} from '@angular/core'
import {Coche} from './coche'
import {PeticionesService} from '../service/peticiones.service';

@Component({
    selector:'coches',
    templateUrl: './coches.component.html',
    providers : [PeticionesService]
})

export class CochesComponent{
    public coche: Coche;
    public Coches:Array<Coche>;
    public articulos;

constructor(
    private _peticionesService: PeticionesService
){
    this.coche = new Coche("", "", "");
    this.Coches= [
        new Coche("Sportage", "120", "azul"),
        new Coche("Renault", "110", "negro")
    ]
    
}

ngOnInit(){
    this._peticionesService.getArticulos().subscribe(
        result => {
            this.articulos = result;
            console.log(result);

            if(!this.articulos){
                console.log("error en el servidor");
            }
        },
        error => {
            var errorMessage =<any>error;
            console.log(errorMessage)
        }

    );

}

onSubmit(){
    this.Coches.push(this.coche);
    this.coche = new Coche("", "", "");
}

}
