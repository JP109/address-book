import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
// import validationData from '../../assets/validation-data.json';

@Injectable({providedIn: "root"})

export class validationService {
      // validationData = validationData;
      // jsonLogg(){
      //       console.log(validationData)
      // }



      // public validationData:{name:string, password:string, contact:number}[] = [];

      constructor(private http: HttpClient){}

      fetchData() {
            return this.http
            .get<{name:string, password:string, contact:number}[]>("./assets/validation-data.json")
            // .get<{name:string, password:string, contact:number}[]>("./assets/validation-data.json")

      }
      
}