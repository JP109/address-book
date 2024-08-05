import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticationService } from '../authentication-service/authentication-service.service';
import { Contact } from '../contact.model';
import { validationService } from '../validation-service/validation-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  // providers: [validationService]
})
export class LoginComponent implements OnInit {
  valData: Contact[] = [];


  userName = "";
  password = "";
  user = {};
  incorrect_credentials_error = false;
  // savedUsers = {...localStorage};
  

  //Shortcut to inject a service and instantiate it at the same time
  constructor(
    private validationService: validationService, 
    private router: Router, 
    private authenticationService:authenticationService
    ) {}

  ngOnInit(): void {
    // this.valData = this.validationService.validationData;
    // console.log({...localStorage})

    // if(this.valData.some(user => user.password === this.savedUsers[user.name])){
    //   this.authenticationService.authenticate();
    //   console.log("ACCESS GRANTED!!")
    // }

    this.validationService.fetchData().subscribe(data=>{
      this.valData = data;
    })
  }

  onSubmitForm = (form: NgForm) => {
    // console.log(form)
    if (this.valData.some(user => user.name === form.value.username && user.password === form.value.password)) {
      this.authenticationService.authenticate();
      localStorage.setItem(`${form.value.username}`,`${form.value.password}`)
      this.router.navigate(["/"])
      console.log("ACCESS GRANTED!")
    }
    else{
      console.log("ACCESS DENIED!")
      this.incorrect_credentials_error = true;
    }
  }

  // onSubmitForm = () => {
  //   console.log(this.userName, this.password)
  //   if (this.valData.some(user => user.name === this.userName && user.password === this.password)) {
  //     /* valData contains the element we're looking for */
  //     // this.router.navigate(['home'])
  //     this.authenticationService.authenticate();
  //     localStorage.setItem(`${this.userName}`,`${this.password}`)
  //     console.log("ACCESS GRANTED!")
  //   }
  //   else{
  //     console.log("ACCESS DENIED!")
  //   }
  // }

  
}
