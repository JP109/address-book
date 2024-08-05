import { Component, DoCheck, OnInit } from '@angular/core';
import { authenticationService } from './authentication-service/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements DoCheck{
  title = 'login-app-final';
  
  // authenticated = false;

  // constructor(private authenticationService:authenticationService){}

  ngDoCheck(): void{
    // this.authenticated = this.authenticationService.authenticated;
    // console.log("Auth?", this.authenticated)
  }
}
