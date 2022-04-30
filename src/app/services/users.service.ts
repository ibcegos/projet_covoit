import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  addUserService(user:any){
    return this.http.post("http://localhost:8080/Covoit/add_user", user);
  }

}
