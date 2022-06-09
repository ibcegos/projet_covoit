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
  userRide!: any;




  //recurrentList: Recurrents[] = [];
  //ride!: any;
  //typeTrajet: TypeTrajet[] = [];




  //IsRecu= this.trajetsService.isReccurent;




  constructor(private trajetsService: TrajetsService) { }

  ngOnInit(): void {
    this.getTrajets();
    // this.getUser();
  }

  getTrajets() {

    this.trajetsService.getTrajetsService().subscribe((data) => {
      console.log(data);
      this.driverRide = data;
    });
  }
  // getUser() {
  //   this.trajetsService.getUserService().subscribe((data) => {
  //     this.userRide = data;
  //     console.log(data);
  //   });
  // }
}






