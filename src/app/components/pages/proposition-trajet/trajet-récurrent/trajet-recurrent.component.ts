import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { TrajetsService } from 'src/app/services/trajets.service';


@Component({
  selector: 'app-trajet-recurrent',
  templateUrl: './trajet-recurrent.component.html',
  styleUrls: ['./trajet-recurrent.component.css']
})
export class TrajetRecurrentComponent implements OnInit {



  // public trajet-simple : TrajetSimple = new TrajetSimple();

  constructor(
    private trajetService:TrajetsService,

    ) { }

  ngOnInit(): void {

  }

  // public get trajet_recurrent(): FormArray {
  //   return this.
  // }

  // public addTrajet() : void {
  //   this.trajet_recurrent.push(new FormControl());
  // }

  addRecurrentRide(recurrentRide:any){
    let recurrentList : any[] =  [
      {jourAller : recurrentRide.value.jourAller1, 
      timeAller : recurrentRide.value.timeAller1, 
      timeRetour : recurrentRide.value.timeRetour1},

      {jourAller : recurrentRide.value.jourAller2, 
      timeAller : recurrentRide.value.timeAller2, 
      timeRetour : recurrentRide.value.timeRetour2},

      {jourAller : recurrentRide.value.jourAller3, 
      timeAller : recurrentRide.value.timeAller3, 
      timeRetour : recurrentRide.value.timeRetour3},

      {jourAller : recurrentRide.value.jourAller4, 
      timeAller : recurrentRide.value.timeAller4, 
      timeRetour : recurrentRide.value.timeRetour4},

      {jourAller : recurrentRide.value.jourAller5, 
      timeAller : recurrentRide.value.timeAller5, 
      timeRetour : recurrentRide.value.timeRetour5}
  ]; 
    console.log(recurrentList)

    let rideValue = recurrentRide.value; 
    console.log(rideValue);

    let recurrentRideType : string = "RECURRENT";

    let dataRecurrentRide : any = ({
      departure : recurrentRide.value.departure, 
      vehicule_type : recurrentRide.value.vehicule_type,
      seats : recurrentRide.value.seats,
      rideType : recurrentRideType,
      recurrentList : recurrentList
    })
    console.log(dataRecurrentRide);


    this.trajetService.addRideService(dataRecurrentRide).subscribe(data=> {
       console.log(data);
     }
    )
  }

  // public get ajoutTrajets(): FormArray {
  //   return null;
  // }



}

 
