import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EdgalaxyService {
  url: string = 'https://edgalaxy.net/hge';

  constructor(private __http: HttpClient) {}

  __edgalaxyHge3(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text',
      }),
    };
    return this.__http.get(this.url, httpOptions);
  }

  __edgalaxyHge2(): Observable<any> {
    return this.__http.get(this.url);
  }

  __edgalaxyHge(): void {
    
  }
}
