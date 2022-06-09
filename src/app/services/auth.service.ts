import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  API_URL = 'http://localhost:8080/Covoit/login';
  

  constructor(private http: HttpClient, private router : Router) { 

  }
  tokenresp:any;
  tokenaccess:any;
  private _updatemenu = new Subject<void>();
  get updatemenu() {
    return this._updatemenu;
  }

  proceedlogin(usercred: any) {
    return this.http.post(this.API_URL, usercred);
  }

  GetToken(){
    return localStorage.getItem('accessToken')||'';
   }


   IsLoggedIn(){
     return localStorage.getItem('accessToken')!=null;
   }
   HaveAccess(){
    var loggintoken=localStorage.getItem('accessToken')||'';
    let _token = loggintoken.split('.')[1];
    this.tokenaccess = JSON.parse(atob(_token))
    if(this.tokenaccess.roles.includes("Admin")){
      return true
    }else{
      alert("Vous n'avez le droits d'accèder à cette page");
      return false
    }    
}
Logout(){
  alert("Session expirée");
  localStorage.clear();
  this.router.navigate(['']);

}
 
GenereteRefreshToken(){
   let input = {
     "accessToken": this.GetToken(),
     "refreshToken": this.GetRefreshToken()
 }
 return this.http.post(this.API_URL+ 'refresh', input, {withCredentials: true});

}




GetRefreshToken(){
  return localStorage.getItem('refreshToken')||'';
}
SaveTokens(tokendata: any) {
  localStorage.setItem('accessToken', tokendata.accessToken);
  localStorage.setItem('refreshToken', tokendata.refreshToken);
}

GetRolebyToken(token: any) {
  let _token = token.split('.')[1];
  this.tokenresp = JSON.parse(atob(_token))
  console.log(this.tokenresp);
  console.log(this.tokenresp.roles)
  //get the role element from array roles
  console.log(this.tokenresp.roles[0]);
  return this.tokenresp.roles;
}

// GetMenubyrole(role: any) {
//   return this.http.get(this.API_URL + 'GetMenubyRole/' + role)
// }
// HaveAccess(role: any, menu: any) {
//   return this.http.get(this.API_URL+ 'HaveAccess?role=' + role + '&menu=' + menu);
// }


}

