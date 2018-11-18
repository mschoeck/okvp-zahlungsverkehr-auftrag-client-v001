import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  enableMessagingInfo: boolean = false;
  messages: string[] = [];

  addInfo(message: string) {
    if (this.enableMessagingInfo)
      this.messages.push(message);
  }

  error(message: string) {
      this.clear();
      this.messages.push(message);
  }
  
  clear() {
    this.messages = [];
  }
}
