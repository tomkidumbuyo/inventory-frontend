import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [{
  path: '',
  redirectTo: 'summary',
  pathMatch: 'full'
}, {
  path: 'summary',
  component: SummaryComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
