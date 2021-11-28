import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://thabella.th-deg.de/thabella/opn/period/findByRoom/146/2020-11-24%208:00";

  constructor(private httpClient: HttpClient) { }

  sendGetRequest(url: string) {
    return this.httpClient.get<Event>(url); // this.apiUrl
  }

  sendGetRoomsRequest(url: string) {
    return this.httpClient.get<Room[]>(url); // get Room Array
  }

  /*
  sendPostRequest(data: Object): Observable<Object> {
    return this.httpClient.post(this.apiUrl, data);
  }
  */
}
