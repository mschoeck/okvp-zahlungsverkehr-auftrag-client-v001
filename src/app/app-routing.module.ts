import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UicontrolComponent } from './uicontrol/uicontrol.component';
import { DashboardFreigabeComponent } from './dashboard-freigabe/dashboard-freigabe.component';
import { AuftragslisteComponent } from './auftragsliste/auftragsliste.component';
import { AuftragDetailComponent } from './auftrag-detail/auftrag-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
// Simuliert als Alternative mit Screenshots einen UI-Ablauf
//{ path: '', component: UicontrolComponent, canActivate : [AuthGuard] },
  { path: '', component: DashboardFreigabeComponent, canActivate : [AuthGuard] },
  { path: 'dashboard-freigabe', component: DashboardFreigabeComponent },
  { path: 'auftragsliste', component: AuftragslisteComponent },
  { path: 'detail/:id', component: AuftragDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'uicontrol', component: UicontrolComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
