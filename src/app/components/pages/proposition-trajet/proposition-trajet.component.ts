import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

import { TrajetsService } from 'src/app/services/trajets.service';


@Component({
  selector: 'app-proposition-trajet',
  templateUrl: './proposition-trajet.component.html',
  styleUrls: ['./proposition-trajet.component.css']
})
export class PropositionTrajetComponent implements OnInit {

  ride_type:any;

  // public trajet-simple : TrajetSimple = new TrajetSimple();

  constructor(
    // private trajetService:TrajetsService,
    // private fb : FormBuilder
    ) { }

  ngOnInit(): void {
    // this.TrajetForm = this.fb.group({
    //   adress: [''], 
    //   vehicule: [''], 
    //   nb_place: [''], 
    //   ride_type: [''], 
    // })
    
  }

  // public get trajet_recurrent(): FormArray {
  //   return this.
  // }

  // public addTrajet() : void {
  //   this.trajet_recurrent.push(new FormControl());
  // }

  addRide(ride:any){
    let rideValue = ride.value;  
    console.log(rideValue);
    //this.trajetService.addRideService(rideValue).subscribe(data=> {
    //    console.log(data);
    //  }
    // )
  }





}

 
