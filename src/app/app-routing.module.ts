import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalesComponent } from './paises/pages/capitales/capitales.component';
import { PaisComponent } from './paises/pages/pais/pais.component';
import { RegionComponent } from './paises/pages/region/region.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: RegionComponent
  },
  {
    path: 'capital',
    component: CapitalesComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  {
    path: '**',
    component: NotFoundComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
