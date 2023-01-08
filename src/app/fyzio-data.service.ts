import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
import { BandData, RingData } from "./interfaces/main_interface";


@Injectable({
  providedIn: 'root'
})
export class FyzioDataService {

  urlRingData: string = 'http://localhost:3000/RingData';
  constructor(private http: HttpClient) { }

  access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJociByYWN0IHJudXQiLCJleHAiOjE2NzMyNDE1MjcsImlhdCI6MTY3MzIxMjcyN30.qwNukfqoc5sHcDDis6AiBCpF-19LiZquSgQCB9H3VIQ"
  access_token_watch = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzhaM1IiLCJzdWIiOiJCOVRCN1IiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJhY3QgcmhyIHJudXQiLCJleHAiOjE2NzE2NzQzOTEsImlhdCI6MTY3MTY0NTU5MX0.s4GSpXZSeCToE8udt-gfy6f5nA-qMv5mtJF50wv7L1o"

  requestOptions = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };
  requestOptions_watch = {
    headers: {"Authorization": "Bearer " + this.access_token_watch}
  };


  getData2(){
    return this.http.get('https://api.fitbit.com/1/user/-/activities.json', this.requestOptions)
  }

  getBandData(): Observable<any>{
    return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/activities/heart/date/2022-12-19/2022-12-20.json', this.requestOptions);
  }

  getWatchData():Observable<any> {
    return this.http.get<any>('https://api.fitbit.com/1/user/B9TB7R/activities/heart/date/2022-12-18/2022-12-20.json', this.requestOptions_watch);
  }

  getRingData(): Observable<RingData[]>{
    return this.http.get<RingData[]>(this.urlRingData)
  }

}

/*
    fetch('https://api.fitbit.com/1/user/-/activities.json', {
      method: "GET",
      headers: {"Authorization": "Bearer " + access_token}
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
 */
