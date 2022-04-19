import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfoliService {

  constructor( private http : HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get('C:\Users\facundo\Desktop\mercado\merca\src\assets\data\data.json');
    
  }
}
