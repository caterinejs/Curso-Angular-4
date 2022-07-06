export class Empleado{

    /* lo de abajo es equivalente a esto, abajo se ahorra codigo
    public nombre:string;
    public edad:number;

    constructor(nombre, edad){
        this.nombre= nombre;
        this.edad=edad;
    }
    */
    constructor (
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean 
        ){}
} 