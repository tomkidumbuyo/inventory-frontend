import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementRoutingModule } from './movement-routing.module';
import { MovementComponent } from './movement.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MovementComponent
  ],
  imports: [
    CommonModule,
    MovementRoutingModule,
    SharedModule
  ]
})
export class MovementModule { }
