import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html'
})
export class PaisComponent {

  termino:string='';
  paises:Country[]=[];
  error : boolean = false;
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;

  constructor(private paisService:PaisService) {}

  buscar( termino:string){
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPaises(termino)
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

  sugerencias(termino:string){
    this.error = false;
    this.termino = termino;    
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPaises(termino)
      .subscribe({
        next: (resp)=>{
            this.paisesSugeridos = resp.splice(0,5);  
            this.error = false;
          },
        error: (error)=>{
          console.error(error);         
          this.error = true;
          this.paisesSugeridos = [];
        }
    });
  }
}
