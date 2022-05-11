import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  pseudoNull:any = true;
  nomNull:any = true;
  prenomNull:any = true;
  emailNull:any = true;
  wrongEmail:any = true;
  passwordNull:any = true;
  confirmedPasswordNull:any = true;
  confirmedPasswordMistake:any = true;
  cguNull:any = true;
  display='none';

  constructor(private usersService: UsersService ) { }

  ngOnInit(): void {
  }

  // Inscription 
  addUser(user:any) {
    let data = user.value;
    console.log(data);
    //Vérification des champs vides au moment de la validation
    if (data.pseudo == ""){
      this.pseudoNull = false;
    }
    if (data.lastName == ""){
      this.nomNull = false;
    } 
    if (data.firstName == ""){
      this.prenomNull = false;
    }
    if (data.email == ""){
      this.emailNull = false;
    }
    if (data.password == ""){
      this.passwordNull = false;
    }
    if (data.confirmedPassword == ""){
      this.confirmedPasswordNull = false;
    }
    //avatar par défault // A VERIFIER  !! pas de src ...
    if (data.avatar == "") {
      data.avatar = "../../../../assets/img/avatar_default.png";
    }
    if (data.cgu == ""){
      this.cguNull = false;
    } 
    else {
      this.display = 'block';
      this.usersService.addUserService(data).subscribe( () =>
      console.log("vous etes inscrit, veuillez attendre demain que votre compte soit validé par un admin !")
      )
    }

  }

  //Vérification si les champs sont vides après click sur le champ
  //Vérifie si le pseudo n'est pas vide
  pseudoBlur(user:any){
    if (user.value.pseudo == ""){
      this.pseudoNull = false;
    } else {
      this.pseudoNull = true;
    }
  }
 //Vérifie si le nom n'est pas vide
  lastNameBlur(user:any) {
    if (user.value.lastName == ""){
      this.nomNull = false;
    } else {
      this.nomNull = true;
    }
  }
 //Vérifie si le prénom n'est pas vide
  firstNameBlur(user:any) {
    if (user.value.firstName == ""){
      this.prenomNull = false;
    } else {
      this.prenomNull = true;
    }
  }

  //Vérification si l'email est vide et se termine par l'adresse de l'entreprise
  emailBlur(user:any) {
    if (user.value.email == "" || !user.value.email.endsWith('@entrepriseipi.com')) {
      this.emailNull = false;
    } else {
      this.emailNull = true;
    }
  }

  //Vérifie si le mot de passe n'est pas vide
  passwordBlur(user:any) {
    if (user.value.password == ""){
      this.passwordNull = false;
    } else {
      this.passwordNull = true;
    }
  }

 //Vérifie si la confirmation du mot de passe n'est pas vide
  confirmedPasswordBlur(user:any) {
    if (user.value.confirmedPassword == ""){
      this.confirmedPasswordNull = false;
      this.confirmedPasswordMistake = true;
    } else {
      this.confirmedPasswordNull = true;

      //Verifie si le confirmed password est similaire au password
      if (user.value.confirmedPassword != user.value.password) {
        this.confirmedPasswordMistake = false;
      } else {
        this.confirmedPasswordMistake = true;
      }
    }
  }

  //Vérifie si le cgu n'est pas coché
  cguClick(user:any) {
    if (user.value.cgu == ""){
      this.cguNull = true;
    } else {
      this.cguNull = false;
    }
  }

  //Ferme la popup
  closeModal() {
    this.display = 'none';
  }

}