import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/message.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  messagesFetchingSubscription!: Subscription;
  messagesChangeSubscription!: Subscription;
  isFetching = false;

  constructor(private messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.messagesChangeSubscription = this.messageService.messagesChange.subscribe(messages => {
      this.messages = messages;
    });
    this.messagesFetchingSubscription = this.messageService.messagesFetching.subscribe(isFetching => {
      this.isFetching = isFetching;
    });
    this.messageService.fetchMessages();
  }

  ngOnDestroy(): void {
    this.messagesChangeSubscription.unsubscribe();
    this.messagesFetchingSubscription.unsubscribe();
  }

}
