
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rides } from '../components/models/Rides';


@Injectable({
  providedIn: 'root'
})
export class TrajetsService {

  constructor(
    private http: HttpClient,
    
    ) { }

  

    addRideService(ride: Rides): Observable<Rides> {
      console.log(ride);
      return this.http.post("http://localhost:8080/Covoit/addRide", ride);
    }



    getTrajetsService() : Observable<any>{
      return this.http.get<any>("http://localhost:8080/Covoit/getRides");
    
   }

   getUserService() : Observable<any>{
    return this.http.get<any>("http://localhost:8080/Covoit/getdriver");
   }
   



  
}
