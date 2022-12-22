import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/Producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router, private toastr: ToastrService, private titulo: Title) {
    titulo.setTitle('Crear Producto')
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.productoService.create(this.producto).subscribe(res => {
      this.toastr.info('Producto Creado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      })
      this.router.navigate(['/'])
    })
  }
}

