import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent} from './Fruta/Fruta.component';
import { EmpleadosComponent} from './Empleados/Empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
