import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  baseUri = "http://localhost:3000/globebilling";

  getUsers() {
    return this.http.get(`${this.baseUri}/users`);
  }


}
