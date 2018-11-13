import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataAuftragService }  from './in-memory-data-auftrag.service';

import { AppComponent } from './app.component';
import { DashboardFreigabeComponent } from './dashboard-freigabe/dashboard-freigabe.component';
import { AuftragslisteComponent } from './auftragsliste/auftragsliste.component';
import { AuftragDetailComponent } from './auftrag-detail/auftrag-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
 imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataAuftragService, { dataEncapsulation: false }
    )
  ],
  
  declarations: [
    AppComponent,
    DashboardFreigabeComponent,
    AuftragslisteComponent,
    AuftragDetailComponent,
    MessagesComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
