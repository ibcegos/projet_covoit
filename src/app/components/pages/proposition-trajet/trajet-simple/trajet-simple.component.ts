import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

import { TrajetsService } from 'src/app/services/trajets.service';



@Component({
  selector: 'app-trajet-simple',
  templateUrl: './trajet-simple.component.html',
  styleUrls: ['./trajet-simple.component.css']
})
export class TrajetSimpleComponent implements OnInit {

 

  constructor(
    private trajetService:TrajetsService,

    ) { }

  ngOnInit(): void {

    
  }
  
  addSimpleRide(simpleRide:any){
    let simpleList : any[] =  [
      {dateAller : simpleRide.value.dateAller, 
      timeAller : simpleRide.value.timeAller, 
      timeRetour : simpleRide.value.timeRetour}
  ]; 
    console.log(simpleList)

    let rideValue = simpleRide.value; 
    console.log(rideValue);

    let simpleRideType : string = "SIMPLE";

    let dataSimpleRide : any = ({
      departure : simpleRide.value.departure, 
      vehicule_type : simpleRide.value.vehicule_type,
      seats : simpleRide.value.seats,
      rideType : simpleRideType,
      simpleList : simpleList
    })
    console.log(dataSimpleRide);


    this.trajetService.addRideService(dataSimpleRide).subscribe(data=> {
       console.log(data);
     }
    )
  }





}

 
