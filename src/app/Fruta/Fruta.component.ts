import {Component} from "@angular/core";

@Component ({
    selector: 'fruta', 

    templateUrl: './fruta.component.html'
   
    })

export class FrutaComponent{
    public nombre_componente= "Componente de fruta";
    public listado_frutas = "naranja, fresa, banano";
    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any> = ['carpintero', 'albañil', 'fontanero'];
    comodin:any = "cualquier cosa"; 

    constructor(){
        
        this.nombre= "caterine Jaramillo";
        this.edad= 28;
        this. mayorDeEdad= true
        this.comodin= "si";
        
    }

    ngOnInit(){

        this.cambiarNombre();
        this.cambiarEdad(45);
        
        console.log(this.nombre + " " + this.edad );

        //variables y alcance

        var uno = 8;
        var dos = 15;

        if (uno=== 8 ){
            let uno = 3;
            var dos = 88;

            console.log("dentro del if:" + uno);
        }
        
    }

    cambiarNombre(){

        this.nombre = "juan lopez";
    }

    cambiarEdad(edad){

        this.edad = edad;
    }
}



