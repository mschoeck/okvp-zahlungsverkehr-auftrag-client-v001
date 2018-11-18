import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthentifizierungService } from '../authentifizierung.service'; 
import { User } from '../entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    user : User = {
      userid: '',
      password: ''
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthentifizierungService,
    ) {
        // redirect to home if already logged in
       // if (this.authenticationService.getCurrentUser()) { 
           // this.router.navigate(['/']);
       // }
    }

    ngOnInit() {
    };

    login() {
        if (this.authenticationService.login(this.user)) {
           this.router.navigate(['/']);
      }
    }
}
