import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../components/models/Users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //ajout d'un user à l'inscription
  addUserService(user:Users) : Observable<Users> {
    return this.http.post<Users>("http://localhost:8080/Covoit/add_user", user);
  }

  //recuperer l'historique des users à valider après inscription
  getListUserToValidateService() : Observable<Users[]> {
    return this.http.get<Users[]>("http://localhost:8080/Covoit/get_user");
  }

  //validation d'un compte user par un admin
  setUserValidate(user:Users) : Observable<Users> {
    return this.http.post<Users>("http://localhost:8080/Covoit/validate_account", user);
  }

}