import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Asignacion } from 'src/app/models/Asignacion';
import { AsignationService } from 'src/app/service/asignation.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-list-assigment',
  templateUrl: './list-assigment.component.html',
  styleUrls: ['./list-assigment.component.css']
})
export class ListAssigmentComponent implements OnInit {
  asignaciones: Asignacion[];

  constructor(private service: AsignationService,
    private titulo: Title,
    private toastr: ToastrService) { titulo.setTitle('Asignaciones') }

  ngOnInit(): void {
   this.listarAsignacion()
  }

  listarAsignacion():void {
    this.service.listAsignacion().subscribe(data => {
      this.asignaciones = data;
    })
  }
}
