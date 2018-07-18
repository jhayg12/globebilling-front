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

  addUser(userInfo) {
    const user = {
      username: userInfo.username,
      fullName: userInfo.fullname,
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.role
    }

    return this.http.post(`${this.baseUri}/users/add`, user);

  }
  
  updateUser(id, username, fullname, email, password, role) {
    const user = {
      username: username,
      fullname: fullname,
      email: email,
      password: password,
      role: role
    }

    return this.http.post(`${this.baseUri}/users/update/${id}`, user);

  }

  deleteUser(id) {
    return this.http.get(`${this.baseUri}/users/delete/${id}`);
  }


}
