import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EdgalaxyService {

  url: string = "/edgalaxy/hge";

  constructor(private __http: HttpClient) { }

  __edgalaxyHge(): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Access-Control-Allow-Origin': '**',
        'Content-Type': 'text'
      })
    }
    return this.__http.get(this.url);
  }

  __edgalaxyHge2(): Observable<any> {
    return this.__http.get(this.url);
  } 
}