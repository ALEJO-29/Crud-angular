import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from 'src/app/models/Equipo';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  equipos: Equipo[];
  filterPost:''
  constructor(private productoService: ProductoService,
    private titulo: Title, private toastr: ToastrService) {
    titulo.setTitle('Equipos')
  }

  ngOnInit(): void {
    this.cargarEquipos()
  }

  cargarEquipos(): void {
    this.productoService.listTeams().subscribe(data => {
      this.equipos = data;
    })
  }

  borrarTeam(equipo: Equipo): void {
    this.productoService.deleteTeams(equipo.id).subscribe(data => {
      this.productoService.listTeams().subscribe(res => {
        this.equipos = res;
      })
    })
    this.toastr.success('Producto Eliminado' + equipo.marca, 'OK', {
      timeOut: 3000, positionClass: 'toast-top-center'
    })
  }

}
