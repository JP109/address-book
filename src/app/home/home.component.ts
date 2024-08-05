import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from '../authentication-service/authentication-service.service';
import { validationService } from '../validation-service/validation-service.service';
import { Contact } from "../contact.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit{
  users: Contact[] = [];
  // user:{name:string, password:string, contact:number} = {name:"", password:"", contact:null};

  savedUsers = {...localStorage};
  isPopup = false;
  editIndex = 0;
  // dataLoaded = false;

  constructor(
    private validationService: validationService, 
    private authenticationService: authenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.users = this.validationService.validationData;
    this.validationService.fetchData().subscribe(data=>{
      this.users = data;
      // this.dataLoaded = true;

      if(!this.authenticationService.authenticated){
        // console.log("TEST",this.users)
        
        if(this.users.some(user => user.password === this.savedUsers[user.name])){
          this.authenticationService.authenticate();
          console.log("ALREADY LOGGED IN");
        }
        else{
          this.router.navigate(["auth"]);
        }
      }
    })

    // if(!this.authenticationService.authenticated && this.dataLoaded){
    //   // console.log("TEST",this.users)
      
    //   if(this.users.some(user => user.password === this.savedUsers[user.name])){
    //     this.authenticationService.authenticate();
    //     console.log("ALREADY LOGGED IN")
    //   }
    //   else{
    //     this.router.navigate(["auth"]);
    //   }
    // }
    console.log("Auth", this.authenticationService.authenticated)
  }

  // ngDoCheck(): void {
  //   console.log("TEST",this.users)
  // }

  deleteContact = (index:number) => {
    this.users.splice(index, 1);
  }

  addContact = (form:NgForm) => {
    // this.users.push(this.user);
    // console.log(this.user)
    
    console.log(form)
    this.users.push(form.value);
    // console.log(this.users)
  }

  editContact = (form:NgForm) => {
    this.isPopup = !this.isPopup;
    console.log("VALUE",form.value);
    this.users.splice(this.editIndex, 1, form.value);
    // this.users.splice(index, 1);
    // this.users.splice(index, 0, form.value);
    // this.users.push(form.value);
  }

  toggleModal = () => {
    this.isPopup = !this.isPopup;
    console.log("HELLO RISHI")
  }

  edit = (i: number) => {
    this.editIndex = i;
    this.isPopup = !this.isPopup;
  }

}
