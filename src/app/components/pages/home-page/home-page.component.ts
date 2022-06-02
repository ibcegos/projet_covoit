import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }


  connectUser(login:NgForm) {
    let user = login.value;
    this.usersService.connectUserService(user).subscribe( data => {
      console.log(data);
    })
  }

}
