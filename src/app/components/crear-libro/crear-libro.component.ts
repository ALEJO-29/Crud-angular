import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Biblioteca } from 'src/app/models/Biblioteca';
import { Libro } from 'src/app/models/Libro';
import { BibliotecaService } from 'src/app/service/biblioteca.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  libro: Libro = new Libro();
  biblioteca:Biblioteca=null
  books: Libro[] = [];

  constructor(private service: BibliotecaService,
    private titulo: Title,
    private toastr: ToastrService,
    private router: Router) {
    titulo.setTitle('bibliotecas')
  }

  ngOnInit(): void {

  }

  //agregar un nuevo libro
  onCreateBook(): void {
    this.service.createLibro(this.libro).subscribe(res => {
      this.toastr.info('libro Creado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      })
      this.router.navigate(['/listBiblioteca'])
    })
  }
}
