import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './equipment.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [{
  path: 'equipment',
  component: EquipmentComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
