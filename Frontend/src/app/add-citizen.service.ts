import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitizenData } from './models/citizen.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCitizenService {

  uri: string = "http://localhost:8080/api/";
  CitizenData: CitizenData;

  constructor(private http:HttpClient) { }


  createUser(CitizenData:CitizenData):Observable<CitizenData> {
    let response;
    this.http.post(`${this.uri}register`, CitizenData).subscribe(res=> {
      response = res
      console.log(res);
    });
    return response
  };

  sendLogin(CitizenData: CitizenData):Observable<CitizenData>{
    let response;
    this.http.post(`${this.uri}sendmail`, CitizenData).subscribe(res=>{
      response = res
      console.log(res)
    });
    return response;
  };
};

