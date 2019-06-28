import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdeaData } from './models/idea.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaboxService {

content:IdeaData
uri: string = "http://localhost:8080/api/";


constructor(private http:HttpClient) { }


createIdea(content):Observable<IdeaData> {
  let response;
  this.http.post<IdeaData>(`${this.uri}boxideas`, content).subscribe(res=> {
    response = res
    console.log(res);
  });
  return response
};

getLastIdea():Observable<IdeaData> {
 return this.http.get<IdeaData>(`${this.uri}boxideas`);
}
}