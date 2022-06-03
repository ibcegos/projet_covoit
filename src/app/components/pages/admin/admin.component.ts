import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../models/Users';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userListToValidate:Users[] = [];
  successValidate: boolean = false;
  user:Users = new Users;

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

  setUserValidate(user:Users) {
    this.usersService.setUserValidate(user).subscribe( data => {
      this.successValidate = true;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.getListUserToValidate();
    });
  }

}
