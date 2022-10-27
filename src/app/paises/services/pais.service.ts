import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';
  

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl : string = 'https://restcountries.com/v3.1'

  get httpParams(){
    return new HttpParams().set('fields','id,ccn3,translations,population,capital,region,timezones,name,flags')
  }

  constructor(private http:HttpClient) { }

  buscarPais(id:string):Observable<Country>{
    const url = `${this.baseUrl}/alpha/${id}`;
    return this.http.get<Country>(url, {params:this.httpParams})
            // .pipe(
            //   catchError( err => of([]))
            // );
  }

  buscarPaises(code:string):Observable<any>{
    const url = `${this.baseUrl}/name/${code}`;
    return this.http.get(url, {params:this.httpParams});
  }

  buscarRegion(region:string):Observable<any>{
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get(url, {params:this.httpParams});
  }

  buscarCapital(pais:string):Observable<Country[]>{
    const url = `${this.baseUrl}/capital/${pais}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }


}
