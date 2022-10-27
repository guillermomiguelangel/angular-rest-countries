import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalesComponent } from './pages/capitales/capitales.component';
import { RegionComponent } from './pages/region/region.component';
import { PaisComponent } from './pages/pais/pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    CapitalesComponent,
    RegionComponent,
    PaisComponent,
    VerPaisComponent,
    TablaComponent,
    BuscadorComponent
  ],
  exports: [
    CapitalesComponent,
    RegionComponent,
    PaisComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisesModule { }
