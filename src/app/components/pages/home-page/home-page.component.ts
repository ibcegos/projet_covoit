import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  mode:number=0;
  responsedata: any;
  
  

  constructor(private service: AuthService, private route: Router) {
    localStorage.clear();
   }
    
  

  ngOnInit(): void {
   
  }
  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
 
  

 Proceedlogin(dataform: any) {
   console.log(dataform);
    //  if (this.loginform.valid) {
      this.service.proceedlogin(dataform).subscribe(result => {
        this.responsedata = result;
        console.log(result);
        if (this.responsedata != null) {
          localStorage.setItem('accessToken', this.responsedata.accessToken);
           localStorage.setItem('refreshtoken', this.responsedata.refreshToken);
           console.log(this.responsedata.accessToken);
          //  this.service.updatemenu.next();
          this.route.navigate(['/connected-page']);
        } else {
          alert("login Failed");
        }
      });
    // }
  }
// }
}


