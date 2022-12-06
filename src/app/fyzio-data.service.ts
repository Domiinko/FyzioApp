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

  access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJociByYWN0IHJudXQiLCJleHAiOjE2NzAzNDQ0OTcsImlhdCI6MTY3MDMxNTY5N30.PzPhxSRMMrWUADJ-hygZSXWw8PaEaCUZPY8BNQ_uzDY"

  requestOptions = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };

  getData2(){
    return this.http.get('https://api.fitbit.com/1/user/-/activities.json', this.requestOptions)
  }

  getBandData(): Observable<any>{
    return this.http.get<any>('https://api.fitbit.com/1/user/B8HP4Z/activities/heart/date/2022-12-03/2022-12-04.json', this.requestOptions);
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
