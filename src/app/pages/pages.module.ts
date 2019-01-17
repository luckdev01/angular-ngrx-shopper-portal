import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';

import {
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { FEATURE_NAME, reducers } from './pages.state';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesEffects } from './pages.effects';
import { accountReducer } from './account/account.reducer';
import { purchaseReducer } from './purchases/purchases.reducer';

import { AccountEffects } from './account/account.effects';
import { AccountService } from './account/account.service';
import { PurchaseService } from './purchases/purchases.service';
import { PurchaseEffects } from './purchases/purchases.effect';

import { AccountComponent } from './account/components/account.component';
import { PurchasesComponent } from './purchases/components/purchases.component';
import { TableComponent } from './purchases/components/table/table.component';
import { DialogComponent } from './account/components/dialog/dialog.component';

@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    StoreModule.forRoot({
      accounts: accountReducer,
      purchases: purchaseReducer
    }),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([AccountEffects, PurchaseEffects])
  ],
  declarations: [
    AccountComponent,
    PurchasesComponent,
    TableComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  providers: [AccountService, PurchaseService]
})
export class PagesModule {
  constructor() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}
