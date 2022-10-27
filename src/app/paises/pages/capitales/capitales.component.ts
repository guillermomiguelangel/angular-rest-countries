import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capitales',
  templateUrl: './capitales.component.html'
})
export class CapitalesComponent {

  termino:string='';
  paises:Country[]=[];
  error : boolean = false;

  constructor(private paisService:PaisService) {}

  buscar( termino:string){
    this.error = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe({
        next: (resp)=>{
          this.paises = resp;  
          this.error = false;
        },
        error: (error)=>{
          console.error(error);         
          this.error = true;
          this.paises = [];
        }
    });
  }

  sugerencias (termino:string){
    this.error = false;
  }

}
