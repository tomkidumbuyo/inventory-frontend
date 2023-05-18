import { InventoryModule } from './inventory/inventory.module';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    InventoryModule,
    SummaryModule,
    StoreModule,
    EquipmentModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
