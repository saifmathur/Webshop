import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class SharedService {
  constructor(private http: HttpClient) {}
  BASE_URL = "http://localhost:8080";

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json",
    });
  }

  getAllProducts(): Observable<any> {
    const url = this.BASE_URL + `/products`;
    const headers = this.getHeaders();
    return this.http.get(url);
  }
}
