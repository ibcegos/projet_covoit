import { DatePipe, Time } from '@angular/common';
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
  dataRide : any;
  display='none';

  departureNull: any = true;
  vehiculeNull: any = true; 
  seatsNull: any = true;
  rideTypeNull: any = true;

  dateAllerNull: any = true;
  timeAllerNull: any = true; 
  timeRetourNull: any = true; 
  timeNull : any = true; 

  jourAller1Null: any = true;
  timeAller1Null: any = true; 
  timeRetour1Null: any = true; 
  time1Null : any = true;

  jourAller2Null: any = true;
  timeAller2Null: any = true; 
  timeRetour2Null: any = true;
  time2Null : any = true;

  jourAller3Null: any = true;
  timeAller3Null: any = true; 
  timeRetour3Null: any = true;
  time3Null : any = true;

  jourAller4Null: any = true;
  timeAller4Null: any = true; 
  timeRetour4Null: any = true;  
  time4Null : any = true;

  jourAller5Null: any = true;
  timeAller5Null: any = true; 
  timeRetour5Null: any = true;
  time5Null : any = true; 


  constructor(
    private trajetService:TrajetsService,
    ) { }

  ngOnInit(): void {
    
  }

// Ajout d'un trajet 
  addRide(Ride:any){
    //Mise en forme des données à envoyer 
    // Trajet simple
    if (this.ride_type == "SIMPLE")
    {
      let simpleList : any[] =  [
        {
          dateAller : Ride.value.dateAller, 
          timeAller : Ride.value.timeAller, 
          timeRetour : Ride.value.timeRetour
        }
      ]; 
      console.log(simpleList)

      let rideValue = Ride.value; 
      console.log(rideValue);

      let RideType : string = "SIMPLE";

      this.dataRide = (
        {
          departure : Ride.value.departure, 
          vehicule_type : Ride.value.vehicule_type,
          seats : Ride.value.seats,
          rideType : RideType,
          simpleList : simpleList
        }
      )
      console.log(this.dataRide);

      // Trajet(s) récurrent(s)
    } else {
      let recurrentList : any[] =  [
        {
          jourAller : Ride.value.jourAller1, 
          timeAller : Ride.value.timeAller1, 
          timeRetour : Ride.value.timeRetour1
        },
        {
          jourAller : Ride.value.jourAller2, 
          timeAller : Ride.value.timeAller2, 
          timeRetour : Ride.value.timeRetour2
        },
        {
          jourAller : Ride.value.jourAller3, 
          timeAller : Ride.value.timeAller3, 
          timeRetour : Ride.value.timeRetour3
        },
        {
          jourAller : Ride.value.jourAller4, 
          timeAller : Ride.value.timeAller4, 
          timeRetour : Ride.value.timeRetour4
        },
        {
          jourAller : Ride.value.jourAller5, 
          timeAller : Ride.value.timeAller5, 
          timeRetour : Ride.value.timeRetour5
        }
      ]; 
      console.log(recurrentList)
  
      let rideValue = Ride.value; 
      console.log(rideValue);
  
      let recurrentRideType : string = "RECURRENT";

      this.dataRide = (
        {
          departure : Ride.value.departure, 
          vehicule_type : Ride.value.vehicule_type,
          seats : Ride.value.seats,
          rideType : recurrentRideType,
          recurrentList : recurrentList
        }
      )
      console.log(this.dataRide);
    }  

    //Gestion des input vides : 
    
    if (this.ride_type == "SIMPLE"){
      if (Ride.value.dateAller == ""){
        this.dateAllerNull = false;
      }
      if (Ride.value.timeAller == ""){
        this.timeAllerNull = false;
      }
      if (Ride.value.timeRetour == ""){
        this.timeRetourNull = false;
      }
      if (Ride.value.timeRetour <= Ride.value.timeAller){
        this.timeNull = false;
      }else{
        this.timeNull = true;
      }
    }
    else
    {
      if (Ride.value.jourAller1 == ""){
        this.jourAller1Null = false;
      }
      if (Ride.value.timeAller1 == ""){
        this.timeAller1Null = false;
      }
      if (Ride.value.timeRetour1 == ""){
        this.timeRetour1Null = false;
      }
      if (Ride.value.timeRetour1 <= Ride.value.timeAller1){
        this.time1Null = false;
      }else{
        this.time1Null = true;
      }
      //-----------------2----------------------
      if (Ride.value.jourAller2 != "" || Ride.value.timeAller2 != "" || Ride.value.timeRetour2 != ""){
        if (Ride.value.jourAller2 == ""){
          this.jourAller2Null = false;
        }
        if (Ride.value.timeAller2 == ""){
          this.timeAller2Null = false;
        }
        if (Ride.value.timeRetour2 == ""){
          this.timeRetour2Null = false;
        }
        if (Ride.value.timeRetour2 <= Ride.value.timeAller2){
          this.time2Null = false;
        }else{
          this.time2Null = true;
      }
    }
      //-----------------3----------------------
      if (Ride.value.jourAller3 != "" || Ride.value.timeAller3 != "" || Ride.value.timeRetour3 != ""){
        if (Ride.value.jourAller3 == ""){
          this.jourAller3Null = false;
        }
        if (Ride.value.timeAller3 == ""){
          this.timeAller3Null = false;
        }
        if (Ride.value.timeRetour3 == ""){
          this.timeRetour3Null = false;
        }
        if (Ride.value.timeRetour3 <= Ride.value.timeAller3){
          this.time3Null = false;
        }else{
          this.time3Null = true;
      }
    }
      //-----------------4----------------------
      if (Ride.value.jourAller4 != "" || Ride.value.timeAller4 != "" || Ride.value.timeRetour4 != ""){
        if (Ride.value.jourAller4 == ""){
          this.jourAller4Null = false;
        }
        if (Ride.value.timeAller4 == ""){
          this.timeAller4Null = false;
        }
        if (Ride.value.timeRetour4 == ""){
          this.timeRetour4Null = false;
        }
        if (Ride.value.timeRetour4 <= Ride.value.timeAller4){
          this.time4Null = false;
        }else{
          this.time4Null = true;
      }
    }
      //-----------------5----------------------
      if (Ride.value.jourAller5 != "" || Ride.value.timeAller5 != "" ||Ride.value.timeRetour5 != ""){
        if (Ride.value.jourAller5 == ""){
          this.jourAller5Null = false;
        }
        if (Ride.value.timeAller5 == ""){
          this.timeAller5Null = false;
        }
        if (Ride.value.timeRetour5 == ""){
          this.timeRetour5Null = false;
        }
        if (Ride.value.timeRetour5 <= Ride.value.timeAller5){
          this.time5Null = false;
        }else{
          this.time5Null = true;
      }
    }
  }
  

    if (this.dataRide.departure == ""){
      this.departureNull = false;
    }
    if (this.dataRide.vehicule_type == ""){
      this.vehiculeNull = false;
    } 
    if (this.dataRide.seats == "" || this.dataRide.seats <=  0){
      this.seatsNull = false;
    }
    if (this.dataRide.rideType == ""){
      this.rideTypeNull = false;
    }
    
    
    if (this.departureNull && this.vehiculeNull && this.seatsNull && this.rideTypeNull &&
      this.dateAllerNull && 
      this.timeAllerNull &&
      this.timeRetourNull &&
      this.timeNull &&
    
      this.jourAller1Null &&
      this.timeAller1Null && 
      this.timeRetour1Null &&
      this.time1Null &&
    
      this.jourAller2Null &&
      this.timeAller2Null &&
      this.timeRetour2Null &&
      this.time2Null &&
    
      this.jourAller3Null &&
      this.timeAller3Null &&
      this.timeRetour3Null &&
      this.time3Null &&
    
      this.jourAller4Null &&
      this.timeAller4Null &&
      this.timeRetour4Null && 
      this.time4Null &&
    
      this.jourAller5Null &&
      this.timeAller5Null &&
      this.timeRetour5Null &&
      this.time5Null )
    {
      this.trajetService.addRideService(this.dataRide).subscribe(data=> {
       console.log(data);
       this.display = 'block';
     }
    )
    }
    
  }


 //Vérification si les champs sont vides après click sur le champ
  //Vérifie si l'adresse n'est pas vide
  departureBlur(ride:any){
    if (ride.value.departure == ""){
      this.departureNull = false;
    } else {
      this.departureNull = true;
    }
  }
  //Vérifie si le type de véhicule n'est pas vide
  vehiculeBlur(ride:any){
    if (ride.value.vehicule_type == ""){
      this.vehiculeNull = false;
    } else {
      this.vehiculeNull = true;
    }
  }

  //Vérification si le nombre de place est vide et s'il est négatif
  seatsBlur(ride:any) {
    if (ride.value.seats == "" || ride.value.seats <= 0) {
      this.seatsNull = false;
    } else {
      this.seatsNull = true;
    }
  }

  //Vérification si le type de trajet est vide 
  rideTypeBlur(ride:any) {
    if (ride.value.rideType == "") {
      this.rideTypeNull = false;
    } else {
      this.rideTypeNull = true;
    }
  }

  //Vérifiaction des données des trajets simples
  //Vérification si la date est vide ou antérieur à aujourd'hui
  dateAllerBlur(ride:any) {
    let aujourdhui : Date = new Date();
    let dateTrajet : Date = ride.value.dateAller;
    console.log(aujourdhui); 
    console.log(dateTrajet);
    if (ride.value.dateAller == "" || dateTrajet < aujourdhui )  {
      this.dateAllerNull = false;
    } else {
      this.dateAllerNull = true;
    }
  }

  timeAllerBlur(ride:any){
    if (ride.value.timeAller == "") {
      this.timeAllerNull = false;
    } else {
      this.timeAllerNull = true;
    }
  }

  timeRetourBlur(ride:any){
    if (ride.value.timeRetour == "" || ride.value.timeRetour <= ride.value.timeAller) {
      this.timeRetourNull = false;
    } else {
      this.timeRetourNull = true;
    }
  }


  // Verification des données des trajets recurrents
  jourAller1Blur(ride:any){
    if (ride.value.jourAller1 == ""){
      this.jourAller1Null = false;
    } else {
      this.jourAller1Null = true;
    }
  }

  timeAller1Blur(ride:any){
    if (ride.value.timeAller1 == "" ) {
      this.timeAller1Null = false;
    } else {
      this.timeAller1Null = true;
    }
  }

  timeRetour1Blur(ride:any){
    if (ride.value.timeRetour1 == "" || ride.value.timeRetour1 <= ride.value.timeAller1) {
      this.timeRetour1Null = false;
    } else {
      this.timeRetour1Null = true;
    }
  }
//------------------------2---------------------------

jourAller2Blur(ride:any){
  if (ride.value.jourAller2 == ""){
    this.jourAller2Null = false;
  } else {
    this.jourAller2Null = true;
  }
}
  timeAller2Blur(ride:any){
    if (ride.value.timeAller2 == "" ) {
      this.timeAller2Null = false;
    } else {
      this.timeAller2Null = true;
    }
  }

  timeRetour2Blur(ride:any){
    if (ride.value.timeRetour2 == "" || ride.value.timeRetour2 <= ride.value.timeAller2) {
      this.timeRetour2Null = false;
    } else {
      this.timeRetour2Null = true;
    }
  }
//------------------------3---------------------------
jourAller3Blur(ride:any){
  if (ride.value.jourAller2 == ""){
    this.jourAller3Null = false;
  } else {
    this.jourAller3Null = true;
  }
}
  timeAller3Blur(ride:any){
    if (ride.value.timeAller3 == "" ) {
      this.timeAller3Null = false;
    } else {
      this.timeAller3Null = true;
    }
  }

  timeRetour3Blur(ride:any){
    if (ride.value.timeRetour3 == "" || ride.value.timeRetour3 <= ride.value.timeAller3) {
      this.timeRetour3Null = false;
    } else {
      this.timeRetour3Null = true;
    }
  }
//------------------------4---------------------------
jourAller4Blur(ride:any){
  if (ride.value.jourAller2 == ""){
    this.jourAller4Null = false;
  } else {
    this.jourAller4Null = true;
  }
}
  timeAller4Blur(ride:any){
    if (ride.value.timeAller4 == "" ) {
      this.timeAller4Null = false;
    } else {
      this.timeAller4Null = true;
    }
  }

  timeRetour4Blur(ride:any){
    if (ride.value.timeRetour4 == "" || ride.value.timeRetour4 <= ride.value.timeAller4) {
      this.timeRetour4Null = false;
    } else {
      this.timeRetour4Null = true;
    }
  }
  //---------------------5----------------------------------
  jourAller5Blur(ride:any){
    if (ride.value.jourAller2 == ""){
      this.jourAller5Null = false;
    } else {
      this.jourAller5Null = true;
    }
  }
  timeAller5Blur(ride:any){
    if (ride.value.timeAller5 == "") {
      this.timeAller5Null = false;
    } else {
      this.timeAller5Null = true;
    }
  }

  timeRetour5Blur(ride:any){
    if (ride.value.timeRetour5 == "" || ride.value.timeRetour5 <= ride.value.timeAller5) {
      this.timeRetour5Null = false;
    } else {
      this.timeRetour5Null = true;
    }
  }



  //Ferme la popup
  closeModal() {
   this.display = 'none';
  }



}

 
