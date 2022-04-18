import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private usersService: UsersService ) { }

  ngOnInit(): void {
  }

  // Inscription 
  addUser(user:any) {
    let data = user.value;
    this.usersService.addUserService(data).subscribe( () =>
      console.log("vous etes inscrit, veuillez attendre demain que votre compte soit validé par un admin !")
    )
  }

}
