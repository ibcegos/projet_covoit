import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Contacts } from '../../models/Contacts';
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
  getAllUsersList:Users[] = [];
  getAllContactList:Contacts[] = [];
  validateAccount: boolean = true;
  deleteAccount: boolean = false;
  updateAccount: boolean = false;
  userEdit: Users = new Users;
  contact: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getListUserToValidate();
    this.getAllUsers();
    this.getAllContact();
    this.successValidate = false;
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

  getAllUsers() {
    this.usersService.getAllUsersService().subscribe( data => {
      this.getAllUsersList = data;
    });
  }

  deleteUser() {
    let id = this.userEdit.id;
    this.usersService.deleteUser(id).subscribe( data => {
      this.getAllUsers();
    });
  }

  editUser(user: Users) {
      this.userEdit = user;
  }

   updateUser() {
     this.usersService.updateUserService(this.userEdit).subscribe( () => {

     })
   }

   closeUpdate() {
     this.getAllUsers();
   }

  formUserToValidate() {
    this.deleteAccount = false;
    this.validateAccount = true;
    this.updateAccount = false;
    this.successValidate = false;
    this.contact = false;
  }

  formDeleteUser() {
    this.deleteAccount = true;
    this.validateAccount = false;
    this.updateAccount = false;
    this.contact = false;
  }

  formUpdateUser() {
    this.updateAccount = true;
    this.deleteAccount = false;
    this.validateAccount = false;
    this.contact = false;
  }

  formViewMessage() {
    this.contact = true;
    this.updateAccount = false;
    this.deleteAccount = false;
    this.validateAccount = false;
  }

  getAllContact() {
    this.usersService.getAllContactService().subscribe( data => {
      this.getAllContactList = data;
    });
  }

}
