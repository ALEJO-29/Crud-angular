import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from 'src/app/models/Equipo';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrls: ['./create-teams.component.css']
})


export class CreateTeamsComponent implements OnInit {

  equipo: Equipo = new Equipo();
  disponible: string[] = ['Disponible', 'No Disponible']
  marca: string[] = ['lenovo', 'macbook', 'hp', 'acer', 'lg', 'asus']
  os: string[] = ['Windows', 'MacOS', 'Linux']

  constructor(private productoService: ProductoService,
    private router: Router, private toastr: ToastrService, private titulo: Title) {
    titulo.setTitle('Crear Equipo')
  }

  ngOnInit(): void {

  }

  onCreateTeam(): void {
    this.productoService.createTeams(this.equipo).subscribe(res => {
      this.toastr.info('Producto Creado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      })
      this.router.navigate(['/list'])
    })
  }
}
