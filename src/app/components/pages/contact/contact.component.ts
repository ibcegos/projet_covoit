import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }


  sendMessage(contact: NgForm) {
    let message = contact.value;
    this.usersService.sendMessageService(message).subscribe( data => {
      console.log("Message envoyé à l'admin")
    });
  }

}
