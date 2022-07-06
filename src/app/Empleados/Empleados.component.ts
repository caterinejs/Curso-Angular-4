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

    constructor(){
        this.empleado = new Empleado('Sofia', 6, 'cocinero', true);
        this.trabajadores = [
            new Empleado('Pablo', 31, 'cocinero', true),
            new Empleado('Milo', 3, 'cocinero', true),
            new Empleado('Annie', 1, 'cocinero', false)
        ];
    }

    ngOnInit(){

console.log(this.empleado);
    }
}