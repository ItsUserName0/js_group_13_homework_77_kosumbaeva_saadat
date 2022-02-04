import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../../models/message.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
