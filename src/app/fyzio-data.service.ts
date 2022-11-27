import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FyzioDataService {

  constructor(private http: HttpClient) { }

  access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyVzMiLCJzdWIiOiJCOEhQNFoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJociByYWN0IHJudXQiLCJleHAiOjE2Njk2MDA2ODYsImlhdCI6MTY2OTU3MTg4Nn0.hxClWDI3CzITgrIb8iGTC1uUlK3IqXXDe9qQl_xdQis"


    requestOptions = {
    headers: {"Authorization": "Bearer " + this.access_token}
  };


  getData2(){
    //const access_token = "your access token"


    return this.http.get('https://api.fitbit.com/1/user/-/activities.json', this.requestOptions) //{
     // headers: { "Authorization": "Bearer " + this.access_token }
    //})

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
