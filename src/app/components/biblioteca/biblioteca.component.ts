import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Biblioteca } from 'src/app/models/Biblioteca';
import { Libro } from 'src/app/models/Libro';
import { BibliotecaService } from 'src/app/service/biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  bibliotecas: Biblioteca[] = [];
  libros: Libro[] = [];
  libro: Libro = new Libro();


  constructor(private service: BibliotecaService,
    private titulo: Title,
    private toastr: ToastrService,
    private router: Router) {
      titulo.setTitle('bibliotecas')
  }

  ngOnInit(): void {
    this.cargaBibliotecas();
    this.cargaLibro();
  }

  cargaBibliotecas(): void {
    this.service.listBiblioteca().subscribe(res => {
      this.bibliotecas = res
    })
  }

  cargaLibro(): void {
    this.service.listLibro().subscribe(res => {
      this.libros = res;
      console.log(res);
    })
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
