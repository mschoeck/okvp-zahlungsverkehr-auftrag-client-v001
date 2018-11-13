import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardFreigabeComponent }   from './dashboard-freigabe/dashboard-freigabe.component';
import { AuftragslisteComponent }  from './auftragsliste/auftragsliste.component';
import { AuftragDetailComponent }  from './auftrag-detail/auftrag-detail.component';

const routes: Routes = [
{ path: '', redirectTo: '/dashboard-freigabe', pathMatch: 'full' },
  { path: 'dashboard-freigabe', component: DashboardFreigabeComponent },
  { path: 'auftragsliste', component: AuftragslisteComponent },
  { path: 'detail/:id', component: AuftragDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
