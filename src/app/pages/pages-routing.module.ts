import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@app/core';

import { PagesComponent } from './pages.component.ts';
import { AccountComponent } from './account/components/account.component';
import { PurchasesComponent } from './purchases/components/purchases.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    data: { title: 'anms.menu.account' }
  },
  {
    path: 'purchases',
    component: PurchasesComponent,
    data: { title: 'anms.menu.purchase' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
