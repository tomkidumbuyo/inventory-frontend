import { AuthenticationModule } from './authentication/authentication.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryModule } from './summary/summary.module';
import { StoreModule } from './store/store.module';
import { EquipmentModule } from './equipment/equipment.module';
import { MovementModule } from './movement/movement.module';
import { TeamModule } from './team/team.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SummaryModule,
    StoreModule,
    EquipmentModule,
    MovementModule,
    TeamModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
