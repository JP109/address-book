import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})

export class authenticationService {
      authenticated = false;
      // authenticated = true;

      authenticate = () => {this.authenticated = true;}
      deAuthenticate = () => {this.authenticated = false;}
}