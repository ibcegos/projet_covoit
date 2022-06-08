import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/models/user';

//let headers = new HttpHeaders().append('content-type','application/x-www-form-urlencoded')
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  constructor(private http: HttpClient) { }

  //ajout d'un user à l'inscription
  addUserService(user:User) : Observable<User> {
    return this.http.post<User>("http://localhost:8080/Covoit/user/add_user", user);
  }

  //recuperer l'historique des users à valider après inscription
  getListUserToValidateService() : Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/Covoit/admin/get_users");
  }

  //validation d'un compte user par un admin
  setUserValidate(user:User) : Observable<User> {
    return this.http.post<User>("http://localhost:8080/Covoit/admin/validate_account", user );
  }

  connectUserService(user:any) : Observable<any>{
    let username:string = user.username;
    let password:string = user.password; 
    return this.http.post("http://localhost:8080/Covoit/login", {username, password}, httpOptions);
    //return this.http.post<any>("http://localhost:8080/Covoit/login", user);
  }


}