import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../components/models/Users';




//let headers = new HttpHeaders().append('content-type','application/x-www-form-urlencoded')
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  tokenresp:any;
  constructor(private http: HttpClient) { }

  //ajout d'un user à l'inscription

  addUserService(user:Users) : Observable<Users> {
    return this.http.post<Users>("http://localhost:8080/Covoit/user/add_user", user);
  }

  //recuperer l'historique des users à valider après inscription
  getListUserToValidateService() : Observable<Users[]> {
    return this.http.get<Users[]>("http://localhost:8080/Covoit/admin/get_users");
  }

  //validation d'un compte user par un admin
  setUserValidate(user:Users) : Observable<Users> {
    return this.http.post<Users>("http://localhost:8080/Covoit/admin/validate_account", user );

  }

  connectUserService(user:any) : Observable<any>{
    let username:string = user.username;
    let password:string = user.password; 
    return this.http.post("http://localhost:8080/Covoit/login", {username, password}, httpOptions);
    //return this.http.post<any>("http://localhost:8080/Covoit/login", user);
  }

  //recuperer l'historique des users à valider après inscription
  getUserProfilService() : Observable<Users> {
    let currentusername = this.GetUsernamebyToken(this.GetToken());
    console.log(currentusername);
    return this.http.get<Users>("http://localhost:8080/Covoit/getUserProfil/" + currentusername);
  }

  GetUsernamebyToken(token: any) {
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token))
    console.log(this.tokenresp);
    console.log(this.tokenresp.sub)
    //get the role element from array roles
    console.log(this.tokenresp.sub);
    return this.tokenresp.sub;
  }

  GetToken(){
    return localStorage.getItem('accessToken')||'';
   }
}