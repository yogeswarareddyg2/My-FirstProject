import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operator/map';

@Injectable()
export class httpTestService {
  constructor(private http: Http) {}
  getCurrentTime (servers: any){
      return this.http.post('http://date.jsontest.com', servers);
       .map(res => res.json())
  }
  postJSON(){
      var json = JSON.stringify({var1: 'test', var2: 3});
      var params = 'json=' + json;
      var headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
      return this.http.post('http://validate.jsontest.com',params,{
          headers: headers
      })
  }
}
 