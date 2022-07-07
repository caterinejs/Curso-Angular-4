import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes que vamos a usar //

import { EmpleadosComponent } from './Empleados/Empleados.component';
import { FrutaComponent } from './Fruta/Fruta.component';

const appRoutes: Routes = [
    {path: '', component: EmpleadosComponent},
    {path: 'empleado', component: EmpleadosComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: '**', component: EmpleadosComponent }
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 