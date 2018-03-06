import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class NewServiceService {
  constructor(private http: Http) {}
  sServers (servers: any []){
      return this.http.post('https://myfirstproj-c4aa5.firebaseio.com/data.json', servers);
  }
  getServers(){
    return this.http.get('https://myfirstproj-c4aa5.firebaseio.com/data.json');
  }

}
