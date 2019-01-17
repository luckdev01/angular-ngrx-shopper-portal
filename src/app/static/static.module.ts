import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [SharedModule, StaticRoutingModule, HttpClientModule, HttpModule],
  declarations: [AboutComponent, FeaturesComponent]
})
export class StaticModule {}
