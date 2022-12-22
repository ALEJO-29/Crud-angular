import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'http://localhost:8080/producto';

  constructor(private http: HttpClient) { }

  public listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url)
  }

  public getById(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + `/${id}`)
  }

  public create(producto: Producto): Observable<any> {
    return this.http.post<Producto[]>(this.url, producto)
  }

  public update(id:number, producto:Producto):Observable<Object>{
    return this.http.put(this.url+`/${id}`,producto)
  }

  public delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
}
