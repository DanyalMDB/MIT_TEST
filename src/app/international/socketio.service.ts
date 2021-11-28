import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

// import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Message } from './message';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root' // 'root'
})
export class SocketioService {
  socket: any;
  // apiUrl = environment.SOCKET_ENDPOINT;

  public constructor() { // private socket: Socket  private httpClient: HttpClient) {
    console.log("SocketioService Constructor");
    
    /*
    socket.connect();
    console.log(socket);
    */
  }

  /*
  public getEventListener() {
    return this.socket.fromEvent('message');
  }
  
  public sendMessage(msg: string) {
    this.socket.emit("message", msg);
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .pipe(map((data: any) => data.msg));
  }
  */
  /*
  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
  */


  

  public setupSocketConnection() {

    this.socket = io(environment.SOCKET_ENDPOINT, {
      // path: '/'
    });
    //this.socket.connect();
    console.log("SocketioService this.socket");
    console.log(this.socket);
    this.socket.emit('message', 'Hello there from Angular.');
    return this;
  }


} // class SocketioService

  // send get to upgrade to websocket
  /*
  sendGetRequest(): Observable<any> {
    console.log("Calling: " + environment.SOCKET_ENDPOINT);
    return this.httpClient.get<any>(environment.SOCKET_ENDPOINT)
      .pipe(
        catchError(this.handleError<any>('get', []))
    ); // this.apiUrl
  }

  private handleError<T>(operation = 'operation', result?: T) {
    console.error("handleError:");
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
*/

  // private socket: Socket

  /*
 

  
  */
  /*
    getMessage() {
      return this.socket
        .fromEvent("message")
        .pipe(map((data) => data));
    }
  
    
    
    

}
*/