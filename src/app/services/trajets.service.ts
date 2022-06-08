<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Drivers } from '../components/models/Drivers';
import { Rides } from '../components/models/rides';





=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drivers } from '../components/models/Drivers';
import { Rides } from '../components/models/Rides';
>>>>>>> cd557ca66caf65c5f520afc5db223e2ea8d7fb6a


@Injectable({
  providedIn: 'root'
})
export class TrajetsService {
<<<<<<< HEAD
  

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





=======

  //isReccurent = false;

  constructor(private http: HttpClient ) {}

    getTrajetsService() : Observable<any>{
      return this.http.get<any>("http://localhost:8080/Covoit/getRides");
    
   }
   



   
>>>>>>> cd557ca66caf65c5f520afc5db223e2ea8d7fb6a
}
