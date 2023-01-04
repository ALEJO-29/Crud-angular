import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../models/Equipo';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //urls for conection backend and frontend
  private url = 'http://localhost:8090/producto';
  private url_teams = 'http://localhost:8090/equipos';

  constructor(private http: HttpClient) { }

  //methods cruds for table products
  public listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url)
  }

  public getById(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + `/${id}`)
  }

  public create(producto: Producto): Observable<any> {
    return this.http.post<Producto[]>(this.url, producto)
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.http.put<any>(this.url + `/${id}`, producto);
  }

  public delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
  //-----------------------------------------------------------------
  //methods crud for table teams

  public listTeams(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.url_teams);
  }

  public listTeamById(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(this.url_teams + `/${id}`)
  }

  public createTeams(equipo: Equipo): Observable<any> {
    return this.http.post<Equipo[]>(this.url_teams, equipo)
  }

  public updateTeams(id: number, equipo: Equipo): Observable<any> {
    return this.http.put<any>(this.url_teams + `/${id}`,equipo);
  }

  public deleteTeams(id: number) {
    return this.http.delete(`${this.url_teams}/${id}`)
  }
}