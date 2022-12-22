import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/Producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {

  producto: Producto= new Producto();
  id: number;

  constructor(private productoService: ProductoService,
    private titulo: Title, private toastr: ToastrService,
    private roter: Router, private activate: ActivatedRoute) {
    titulo.setTitle('Editar productos')
  }

  ngOnInit(): void {
    const id = this.activate.snapshot.params['id'];
    this.productoService.getById(this.id).subscribe(data => {
      this.producto;
    })
  }


  onUpdate(): void {
    const id = this.activate.snapshot.params['id'];
    this.productoService.update(id, this.producto).subscribe(data => {
      this.toastr.success('producto actualizado', 'Ok', {
        timeOut: 3000, positionClass: 'toast-top-center'
      })
    });
  }
}
