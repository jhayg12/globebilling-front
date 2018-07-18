import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  baseUri = "http://localhost:3000/globebilling";

  getRoles() {
    return this.http.get(`${this.baseUri}/roles`);
  }


}
