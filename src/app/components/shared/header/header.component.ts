// import { Component, DoCheck, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit, DoCheck {
//   displaymenu = false;
//   displayadmin = false;
//   displayuser = false;
//   currentrole: any;
//   menulist$: any;

//   constructor(private service : AuthService,private route : Router ) { }

 
//   ngOnInit(): void {
//     this.service.updatemenu.subscribe(res => {
//       this.MenuDisplay();
//       // this.LoadMenu();
//     });
//     this.MenuDisplay();
//     // this.LoadMenu();
//   }
//   ngDoCheck(): void {
//     if (this.route.url == '/') {
//       this.displaymenu = false
//     } else {
//       this.displaymenu = true
//     }
//   }
//   MenuDisplay() {
//     if (this.service.GetToken() != '') {
//       this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
//       if (this.currentrole.includes("Admin")) {
//         this.displayadmin = true;
//         this.displayuser = false;
//       }
//       else {
//         this.displayadmin = false;

//     //   this.displayadmin = this.currentrole.includes("Admin") == 'Admin';
//     //   this.displayuser = this.currentrole.includes("User") == 'User';
//     // }
//   }

//   // LoadMenu() {
//   //   if (this.service.GetToken() != '') {
//   //     this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
//   //     this.service.GetMenubyrole(this.currentrole).subscribe(result => {
//   //       this.menulist$ = result;
//   //     });
//   //   }
//   // }
// }
//   }
// }
