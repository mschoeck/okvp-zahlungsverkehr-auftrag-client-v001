import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardFreigabeComponent } from './dashboard-freigabe/dashboard-freigabe.component';
import { AuftragslisteComponent } from './auftragsliste/auftragsliste.component';
import { AuftragDetailComponent } from './auftrag-detail/auftrag-detail.component';
import { UicontrolComponent } from './uicontrol/uicontrol.component';
import { AuftragsfreigabeComponent } from './auftragsfreigabe/auftragsfreigabe.component';

@NgModule({
 imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardFreigabeComponent,
    AuftragslisteComponent,
    AuftragDetailComponent,
    LoginComponent,
    MessagesComponent,
    UicontrolComponent,
    AuftragsfreigabeComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
