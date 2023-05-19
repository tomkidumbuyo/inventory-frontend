import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { AuthGuard } from '../guards/auth.guard';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [{
  path: 'store',
  component: StoreComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: AllComponent
  }, {
    path: ':id',
    component: SingleComponent,
    children: []
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
