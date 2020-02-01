import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, User, Event} from './models'

import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  SERVER_URL : string = "http://localhost:3000";
  private socket;

    public initSocket(): void {
        this.socket = socketIo(this.SERVER_URL);
    }

    public send(message: User): void {
        this.socket.emit('updatePos', message);
    }

    public sendUser(user : any): void {
        this.socket.emit('user', user);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onSections(): Observable<string> {
        return new Observable<string>(observer => {
            this.socket.on('sections', (data: string) => observer.next(data));
        });
    }

    public onID() : Observable<string> {
        return new Observable<string>(observer => {
            this.socket.on('id', (data : string) => observer.next(data));
        });
    }

    public onEvent(event: Event): Observable<any> {
        return new Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
