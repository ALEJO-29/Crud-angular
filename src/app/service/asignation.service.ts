import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignacion } from '../models/Asignacion';

@Injectable({
    providedIn: 'root'
})

//servicios para asignacion
export class AsignationService {

  private urlAsignation = 'http://localhost:8080/asignacion';

  constructor(private http: HttpClient) { }

    //methods cruds for table products
    public listAsignacion():Observable<Asignacion[]> {
      return this.http.get<Asignacion[]>(this.urlAsignation)
    }
  
    public getByIdAsig(id: number): Observable<Asignacion> {
      return this.http.get<Asignacion>(this.urlAsignation + `/${id}`)
    }
  
    public createAsignacion(usuario: Asignacion): Observable<any> {
      return this.http.post<Asignacion[]>(this.urlAsignation, usuario)
    }
  
    public updateAsignacion(id: number, usuario: Asignacion): Observable<any> {
      return this.http.put<any>(this.urlAsignation + `/${id}`, usuario);
    }
  
    public deleteAsignacion(id: number) {
      return this.http.delete(`${this.urlAsignation}/${id}`)
    }
}