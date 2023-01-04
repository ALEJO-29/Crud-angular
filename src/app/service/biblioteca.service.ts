import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biblioteca } from '../models/Biblioteca';
import { Libro } from '../models/Libro';

@Injectable({
    providedIn: 'root'
})

export class BibliotecaService {

    private urlBiblioteca = "http://localhost:8080/biblioteca"
    private urlLibro = "http://localhost:8080/libro"


    constructor(private http: HttpClient) { }
     
    //listar bibliotecas
    public listBiblioteca(): Observable<Biblioteca[]> {
        return this.http.get<Biblioteca[]>(this.urlBiblioteca);
    }

    //listar libro
    public listLibro(): Observable<Libro[]> {
        return this.http.get<Libro[]>(this.urlLibro);
    }

    //crear libro
    public createLibro(libro: Libro): Observable<Libro[]> {
        return this.http.post<Libro[]>(this.urlLibro, libro)
    }
}