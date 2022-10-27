import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  error : boolean = false;
  pais! :Country;

  constructor(private route: ActivatedRoute,
              private paisService:PaisService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({id}) => this.paisService.buscarPais( id ) ),
        tap( console.log )
      )
      .subscribe({
          next: (pais)=>{ 
            this.pais = pais;
            this.error = false;            
          },
          error: (error)=>{     
            console.error(error);            
            this.error = true;
          }        
      })
  }
}
