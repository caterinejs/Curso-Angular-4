import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent} from './Fruta/Fruta.component';
import { EmpleadosComponent} from './Empleados/Empleados.component';
import { HomeComponent} from './Home/Home.component';
import { ContactoComponent} from './Contacto/Contacto.component';
import { CochesComponent} from './coches/coches.component';

import { ConversorPipe} from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FrutaComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
