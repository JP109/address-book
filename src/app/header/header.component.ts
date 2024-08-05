import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { authenticationService } from '../authentication-service/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  // currentRoute
  authenticated: boolean

  constructor(
    private router: Router,
    private authenticationService: authenticationService
  ) { }

  ngOnInit(): void {
    // this.router.events.filter(event => event instanceof NavigationEnd)
    //   .subscribe(event => {
    //     this.currentRoute = event.url;          
    //     console.log(event);
    //   });
    // console.log(this.router.url)

    this.authenticated = this.authenticationService.authenticated;
    // console.log("Header auth", this.authenticated)
  }

  ngDoCheck(): void{
    this.authenticated = this.authenticationService.authenticated;
    // console.log("AuthHeader?", this.authenticated)
  }

  logout = () => {
    this.router.navigate(["auth"]);
    localStorage.clear();
    this.authenticationService.deAuthenticate();
  }
  

}
