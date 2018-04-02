import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SidebarService {

  constructor(
    private http: Http
  ) { }


  getSidebar(){
    return this.http.get('http://localhost:3000/sidebar/edit-sidebar')
          .map(res => res.json());
  }

  postSidebar(value){
    return this.http.post('http://localhost:3000/sidebar/edit-sidebar', value)
          .map(res => res.json());
  }

}
