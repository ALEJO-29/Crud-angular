import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouteConfigLoadStart } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/Producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService,
    private titulo: Title, private toastr: ToastrService) {
    titulo.setTitle('inventario')
  }

  ngOnInit() {
    this.cargarProductos()
  }

  cargarProductos(): void {
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    })
  }

  borrar(producto: Producto): void {
    this.productoService.delete(producto.id).subscribe(data => {
      this.productoService.listar().subscribe(res => {
        this.productos = res;
      })
    })
    this.toastr.success('Producto Eliminado' + producto.nombre, 'OK', {
      timeOut: 3000, positionClass: 'toast-top-center'
    })
  }
}