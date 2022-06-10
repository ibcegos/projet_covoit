
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drivers } from '../components/models/Drivers';
import { Rides } from '../components/models/Rides';


@Injectable({
  providedIn: 'root'
})
export class TrajetsService {


  tokenresp: any;
  constructor(
    private http: HttpClient,

  ) { }


  filterbyKeywordServices(departure: any):  Observable<any>{
    
    return this.http.get<any>("http://localhost:8080/Covoit/getRidesByDeparture/" + departure);
  }




  addRideService(ride: Rides): Observable<any> {
    return this.http.post<any>("http://localhost:8080/Covoit/addRide",ride);
  }


    getUserService() : Observable<any>{
     return this.http.get<any>("http://localhost:8080/Covoit/getdriver");
   }



  getTrajetsService(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/Covoit/getRides");

  }

  getHistoriqueTrajetService(): Observable<any> {
    let currentusername = this.GetUsernamebyToken(this.GetToken());
    console.log(currentusername);
    return this.http.get<any>("http://localhost:8080/Covoit/getRideHistorique/" + currentusername);
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

  GetToken() {
    return localStorage.getItem('accessToken') || '';
  }

  deleteRide(id: any) : Observable<any> {
    return this.http.delete<any>("http://localhost:8080/Covoit/delete_ride/" + id);
  }


}
