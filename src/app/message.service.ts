import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  enableMessaging: boolean = true;
  messages: string[] = [];

  add(message: string) {
    if (this.enableMessaging)
      this.messages.push(message);
  }
  
  clear() {
    this.messages = [];
  }
}
