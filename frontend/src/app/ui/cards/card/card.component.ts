import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../models/message.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() message!: Message;

  apiUrl = environment.apiUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
