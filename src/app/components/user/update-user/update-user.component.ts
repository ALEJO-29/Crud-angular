import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  usuario: Usuario = new Usuario();
  id: any;

  constructor(
    private userService: UserService,
    private titulo: Title,
    private toastr: ToastrService,
    private router: Router,
    private activate: ActivatedRoute) {
    titulo.setTitle('Editar productos')
  }

  ngOnInit(): void {
    const id = this.activate.snapshot.params['id'];
    this.userService.getByIdUser(id).subscribe(
      data => {
        this.usuario = data;
      }
    );
  }

  onUpdateUser(): void {
    const id = this.activate.snapshot.params['id'];
    this.userService.updateUser(id, this.usuario).subscribe(data => {
      this.toastr.success('equipo actualizado', 'ok', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.router.navigate(['/listUser'])
    });
  }
}
