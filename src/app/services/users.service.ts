import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacts } from '../components/models/Contacts';
import { Users } from '../components/models/Users';




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

  addUserService(user:Users) : Observable<Users> {
    return this.http.post<Users>("http://localhost:8080/Covoit/user/add_user", user);
  }

  //recuperer l'historique des users à valider après inscription
  getListUserToValidateService() : Observable<Users[]> {
    return this.http.get<Users[]>("http://localhost:8080/Covoit/admin/get_users_to_validate");
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

  deleteUser(id: any) : Observable<any> {
    return this.http.delete<any>("http://localhost:8080/Covoit/admin/delete_user/" + id);
  }

  getAllUsersService() : Observable<Users[]> {
    return this.http.get<Users[]>("http://localhost:8080/Covoit/admin/get_all_users");
  }

   updateUserService(user: Users) : Observable<Users> {
     return this.http.put<Users>("http://localhost:8080/Covoit/admin/update_user", user);
   }

   getUserByUsernameService(username: String) : Observable<any> {
    return this.http.get("http://localhost:8080/Covoit/user/get_users_by_username/"+ username);
  }

  sendMessageService(message: any) : Observable<any> {
    return this.http.post<any>("http://localhost:8080/Covoit/user/send_message", message);
  }

  getAllContactService() : Observable<Contacts[]> {
    return this.http.get<Contacts[]>("http://localhost:8080/Covoit/admin/get_all_contact");
  }

}