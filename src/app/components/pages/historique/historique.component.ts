import { Component, OnInit } from '@angular/core';
import { Rides } from '../../models/Rides';
import { TrajetsService } from 'src/app/services/trajets.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {


  constructor(private trajetsService: TrajetsService) { }
  ride: Rides = new Rides;
  rideList: any[] = [];
  simpleList!: any;
  recurrentList!: any;

  ngOnInit(): void {
    this.getHistoriqueTrajetService();
  }

  getHistoriqueTrajetService() {
    this.trajetsService.getHistoriqueTrajetService().subscribe(data => {
      this.rideList = data;
    });
  }

  deleteUser(ride :any) {
    let id = ride.id;
    this.trajetsService.deleteRide(id).subscribe( data => {
      this.getHistoriqueTrajetService();
    });
  }

}
