import { Component } from '@angular/core';
import {Empleado} from './Empleado';

@Component ({

    selector: 'empleados', 
    templateUrl: './Empleados.component.html'
})

export class EmpleadosComponent{
    public titulo = 'Componente de Empleados'
    public empleado: Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo: boolean;
    public color:string;
    public color_seleccionado:string

    constructor(){
        this.empleado = new Empleado('Sofia', 6, 'niña', true);
        this.trabajadores = [
            new Empleado('Pablo', 31, 'coordinador', true),
            new Empleado('Milo', 3, 'perro', true),
            new Empleado('Annie', 1, 'perro', false)
        ];
        this.trabajador_externo= false;
        this.color= 'red';
        this.color_seleccionado= '#808080'
        
    }

    ngOnInit(){

console.log(this.empleado);
    }

cambiarExterno(valor)
{
    this.trabajador_externo = valor;
}

logColorSeleccionado(){
    console.log(this.color_seleccionado);

}
}