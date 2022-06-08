import { Component, OnInit } from '@angular/core';

import { TrajetsService } from 'src/app/services/trajets.service';
import { Drivers } from '../../models/Drivers';
import { Recurrents } from '../../models/Recurrents';

import { Rides } from '../../models/Rides';
import { Simples } from '../../models/Simples';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {
  driverRide!: any;
  simpleList!: any;
  recurrentList!: any;
  TableRecurrent: any[] = [];




  //recurrentList: Recurrents[] = [];
  //ride!: any;
  //typeTrajet: TypeTrajet[] = [];




  //IsRecu= this.trajetsService.isReccurent;




  constructor(private trajetsService: TrajetsService) { }

  ngOnInit(): void {
    this.getTrajets();
  }

  getTrajets() {

    this.trajetsService.getTrajetsService().subscribe((data) => {

      console.log(data);
      //extracting simpleList object from data
      // for (let i = 0; i < data.length; i++) {
      //   //if the ride is simple
      //   if (data[i].rideType == "SIMPLE") {
      //     this.simpleList = data[i].simpleList;
      //     console.log(this.simpleList);
      //   }
      //   //if the ride is recurrent
      //   else if (data[i].rideType == "RECURRENT") {
      //     console.log(data[i].recurrentList);
      //     this.recurrentList = data[i].recurrentList;
      //     }
      // console.log(this.TableRecurrent);


      //extracting simpleList object from data

      this.driverRide = data;

      //this.ride= this.driverRide.rides;


      //console.log(this.driverRide);
      //console.log(this.ride);


  });
  }
}



  //getTrajetsbyDriver(){





