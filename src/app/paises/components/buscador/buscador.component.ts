import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, delay, Subject } from "rxjs";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit{
  
  @Output() onNewPais: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();
  termino:string='';

  constructor() {}

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      })
  }

  buscar(){
    this.onNewPais.emit( this.termino );
  }

  teclaPresionada(event:any){
    this.debouncer.next( this.termino );
  }

}
