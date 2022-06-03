import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Drivers } from '../components/models/Drivers';
import { Rides } from '../components/models/rides';







@Injectable({
  providedIn: 'root'
})
export class TrajetsService {
  

  //isReccurent = false;

  constructor(
    private http: HttpClient,
    
    ) { }

  

  
    
    // public createRide(ride : IRide): Observable <IRide>{
    //   return this.http.post<IRide>("http://localhost:8080/Covoit/addRide", ride).pipe(
    //     catchError(this.handleError)
    //   );
    // }

    addRideService(ride: Rides): Observable<Rides> {
      console.log(ride);
      return this.http.post("http://localhost:8080/Covoit/addRide", ride);
    }

  // getTrajetsService(): Observable<Drivers[]> {
  //   return this.http.get<Drivers[]>("http://localhost:8080/Covoit/getdriver%22);

  // }





}
