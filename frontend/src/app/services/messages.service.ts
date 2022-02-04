import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Subject } from 'rxjs';
import { Message, MessageData } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesChange = new Subject<Message[]>();
  messagesFetching = new Subject<boolean>();

  constructor(private http: HttpClient) {
  }

  fetchMessages() {
    this.messagesFetching.next(true);
    this.http.get<Message[]>(environment.apiUrl + '/messages').pipe(
      map(response => {
        return response.map(item => {
          return new Message(item.author, item.message, item.image);
        });
      })
    ).subscribe({
      next: (result => {
        this.messagesFetching.next(false);
        this.messagesChange.next(result);
      }),
      error: (() => {
        this.messagesFetching.next(false);
      })
    })
  }

  createMessage(messageData: MessageData) {
    return this.http.post(environment.apiUrl + '/messages/new', messageData);
  }
}
