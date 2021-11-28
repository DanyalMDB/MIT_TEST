import { Component, OnInit } from '@angular/core';
import { SocketioService } from './socketio.service'


@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css']
})

export class InternationalComponent implements OnInit {
  public socket: any;
  newMessage: string;
  messageList: string[] = [];

  constructor(private socketService: SocketioService) { } // sets up connection to socketio-server

  ngOnInit(): void {
    console.log("international component init");
    /*
        this.socketService.sendMessage("Hello");
        this.socketService.getMessage();
        */

    //this.socketService.setupSocketConnection();
    // this.setupSocketConnection();
    /*
    this.socketService
      .getEventListener()
      .subscribe((msg: string) => {
        console.log("Received and stored message: " + msg);
        this.messageList.push(msg);
      });
*/
    this.socketService.setupSocketConnection();
    // this.socketService.sendMessage("Hello World from socket.io");
  }

  /*
  sendMessage() {
    this.socketService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
*/
  /*
  private setupSocketConnection() {
    this.socketService.sendGetRequest();
    this.socket = io('http://localhost:3000',

      {
        // path: '/'
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttempts: 10,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false
      }

    );
    this.socket.on('connection', (socket) => {
      console.log('connected to server');
    });
    this.socket.on('disconnect', () => { console.log('user disconnected'); });
    this.socket.on('message', (msg) => { console.log('message: ' + msg); });
    this.socket.send("Hello from client");

  }
  */
} // class InternationalComponent



