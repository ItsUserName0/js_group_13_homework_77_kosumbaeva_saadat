import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';
import { MessageData } from '../../models/message.model';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.sass']
})
export class NewCardComponent implements OnInit {
  @ViewChild('f') messageForm!: NgForm;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit(): void {
  }

  sendMessage() {
    const messageData: MessageData = this.messageForm.value;
    this.messagesService.createMessage(messageData).subscribe(() => {
      this.messagesService.fetchMessages();
    });
  }
}
