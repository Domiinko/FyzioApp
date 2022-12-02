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

  access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJhY3QgcmhyIHJudXQiLCJleHAiOjE2NzAwMTE2NDIsImlhdCI6MTY2OTk4Mjg0Mn0.e2tYTMAi-DUpPyNPb3fpU0EmdFzRI15nObesWtusTFE"

  requestOptions = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };

  getData2(){
    return this.http.get('https://api.fitbit.com/1/user/-/activities.json', this.requestOptions)
  }

  getBandData(): Observable<BandData[] | undefined>{
    return this.http.get<BandData[] | undefined>('https://api.fitbit.com/1/user/-/activities/list.json?afterDate=2019-01-01&sort=asc&offset=0&limit=2', this.requestOptions);
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
