import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { SharedModule } from '../shared/shared.module';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';


@NgModule({
  declarations: [
    StoreComponent,
    AllComponent,
    SingleComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
