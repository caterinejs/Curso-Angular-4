import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
    selector: "Contacto",
    templateUrl: './Contacto.component.html'
})


export class ContactoComponent {
    public titulo= "pagina de contacto de la webmaster";
    public parametro;

constructor(
    private _route: ActivatedRoute,
    private _router: Router
){}

ngOnInit(){
    this._route.params.forEach((params: Params) => {
        this.parametro = params['page'];
    });
  }

  redirigir(){
    this._router.navigate(['/contacto','victorroblesweb.es']);
  }

  redirigirDos(){
   this._router.navigate(['/pagina-principal']);
  }

  
}