import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from 'src/app/models/Equipo';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-update-teams',
  templateUrl: './update-teams.component.html',
  styleUrls: ['./update-teams.component.css']
})
export class UpdateTeamsComponent implements OnInit {

  disponible: string[] = ['Disponible', 'No Disponible']
  marca: string[] = ['lenovo', 'macbook', 'hp', 'acer', 'lg', 'asus']
  os: string[] = ['Windows', 'MacOS', 'Linux']

  equipo: Equipo = new Equipo();
  id: any;

  constructor(
    private productoService: ProductoService,
    private titulo: Title,
    private toastr: ToastrService,
    private router: Router,
    private activate: ActivatedRoute) {
    titulo.setTitle('Editar productos')
  }

  ngOnInit(): void {
    const id = this.activate.snapshot.params['id'];
    this.productoService.listTeamById(id).subscribe(
      data => {
        this.equipo = data;
      }
    );
  }

  onUpdateTeams(): void {
    const id = this.activate.snapshot.params['id'];
    this.productoService.updateTeams(id, this.equipo).subscribe(data => {
      this.toastr.success('equipo actualizado', 'ok', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.router.navigate(['/list'])
    });
  }

}
