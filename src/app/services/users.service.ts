import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/models/user/user';

const API_URL = 'http://localhost:8080/Covoit/test/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //ajout d'un user à l'inscription
   addUserService(user:User) : Observable<User> {
    return this.http.post<User>(API_URL, user);
   }

  //recuperer l'historique des users à valider après inscription
  getListUserToValidateService() : Observable<User[]> {
    return this.http.get<User[]>(API_URL);  
  }

  //validation d'un compte user par un admin
  setUserValidate(user:User) : Observable<User> {
    return this.http.post<User>(API_URL, user);
  }

}