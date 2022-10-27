import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html'
})
export class RegionComponent {
  
  regiones:string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string='';
  paises:Country[]=[];
  error : boolean = false;
  loading:boolean=false;

  constructor(private paisService:PaisService) {}

  activarRegion(region:string){
    if(region === this.regionActiva) return;

    this.regionActiva = region;
    this.error = false;
    this.paises = [];
    this.loading = true;

    this.paisService.buscarRegion(region)
      .subscribe({
        next: (resp)=>{
          this.paises = resp;  
          this.error = false;
          this.loading = false;
        },
        error: (error)=>{
          console.error(error);         
          this.error = true;
          this.paises = [];
          this.loading = false;
        }
    });
  }
  
  getClassActive(region:string){
    return region === this.regionActiva ? 'active' : '' ;
  }
}
