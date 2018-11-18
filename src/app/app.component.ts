import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { AuthentifizierungService } from './authentifizierung.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private authentifizierungService: AuthentifizierungService) 
  {
  }

  logout() {
    this.authentifizierungService.logout();
    this.router.navigate(['/login']);
  }
}