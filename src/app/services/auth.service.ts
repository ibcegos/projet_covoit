import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/models/user/user';



const AUTH_API = 'http://localhost:8080/Covoit/auth/';

// const httpOptions = {
//   headers: new HttpHeaders([{ 'Content-Type': 'application/json' }, {'Access-Control-Allow-Headers', 'Content-Type'},
//   {'Access-Control-Allow-Methods', 'GET'},
//   {'Access-Control-Allow-Origin', '*'}])

// };

//Access-Control-Allow-Origin: *




 const httpOptions = { headers : new HttpHeaders({ 'Content-Type': 'application/json' 
  ,'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'GET', 'Access-Control-Allow-Origin': '*'})
};
  //  'Access-Control-Allow-Origin': 'http://localhost:4200', "Access-Control-Allow-Methods" :"PUT, POST, PATCH, DELETE, GET",
  //                      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' , 'Content-Type': 'application/json',
  //                      'Access-Control-Allow-Credentials': 'true' ,
  //                      'Access-Control-Max-Age': '3600'};
                       

                      
                      
                      

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(form: any): Observable<any> {
    
    console.log(form)
    return  this.http.post<any>(AUTH_API + 'signin', form, httpOptions );      
  };

    
    
    
    
  //   this.http.post(
  //     AUTH_API + 'signin',
      
  //     {
  //       username,
  //       password,
  //     },
       
  //     {headers : headers}
  //   );
  // }

  

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signup',
  //     {
  //       username,
  //       email,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }


  // addUserService(user:User) : Observable<User> {
  //      return this.http.post<User>(API_URL, 'signup');
  //    }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { },);
  }
}
