import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http : Http) { }
  
  register(user){
    return this.http.post('http://localhost:3000/users/register', user)
          .map(res => res.json());
  }

  login(user){
    return this.http.post('http://localhost:3000/users/login', user)
          .map(res => res.json());
  }

}
