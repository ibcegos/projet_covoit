import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../models/Users';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  profil: Users = new Users;

  ngOnInit(): void {
    this.getUserProfilService();
  }

  getUserProfilService() {
    this.usersService.getUserProfilService().subscribe(data => {
      this.profil = data;
    });
  }
}
