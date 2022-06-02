import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drivers } from '../components/models/Drivers';
import { Rides } from '../components/models/Rides';


@Injectable({
  providedIn: 'root'
})
export class TrajetsService {

  //isReccurent = false;

  constructor(private http: HttpClient ) {}

    getTrajetsService() : Observable<any>{
      return this.http.get<any>("http://localhost:8080/Covoit/getRides");
    
   }
   



   
}
