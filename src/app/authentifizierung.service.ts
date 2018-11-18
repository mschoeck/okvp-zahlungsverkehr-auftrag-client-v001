import { Injectable } from '@angular/core';
import { User } from './entities/user';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class AuthentifizierungService {
    currentUser : string;

    constructor(
        private messageService: MessageService
    ) {}

    login(user : User) : boolean {
        if (user == null) {
            this.messageService.error("Bitte geben Sie Alias und Passwort an.");
            return false;
        }
        var userValid : boolean = this.isValidUser(user.userid, user.password);
        if (!userValid)  return false;
         this.currentUser = user.userid;
        return true;
    }

    logout() {
        this.currentUser = null;
    }

    getCurrentUser() : string {
        return this.currentUser;
    }

    isValidUser(userid:string, password:string) : boolean
    {
        if (userid == null || password == null || userid == '' || password == '') {
            this.messageService.error('Fehler beim Login: Alias oder Passwort nicht bekannt.');
            return false;
        }
        this.messageService.clear();
        return true;       
    }
}