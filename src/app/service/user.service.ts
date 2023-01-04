import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private urlUser = 'http://localhost:8090/user';

    constructor(private http: HttpClient) { }

  //methods cruds for table products
  public listUser():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlUser)
  }

  public getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.urlUser + `/${id}`)
  }

  public createUser(usuario: Usuario): Observable<any> {
    return this.http.post<Usuario[]>(this.urlUser, usuario)
  }

  public updateUser(id: number, usuario: Usuario): Observable<any> {
    return this.http.put<any>(this.urlUser + `/${id}`, usuario);
  }

  public deleteUser(id: number) {
    return this.http.delete(`${this.urlUser}/${id}`)
  }
}