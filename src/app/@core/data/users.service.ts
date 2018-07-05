import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  baseUri = "http://localhost:4000";

  getUsers() {
    return this.http.get(`${this.baseUri}/users`);
  }

}
