import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userListToValidate:User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getListUserToValidate();
  }

  //Récupère les données pour un admin
  getListUserToValidate() {
    this.usersService.getListUserToValidateService().subscribe( data => {
      this.userListToValidate = data;
    });
  }

  setUserValidate(user:User) {
    this.usersService.setUserValidate(user).subscribe( data => {
      this.getListUserToValidate();
    });
  }

}
