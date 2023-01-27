import { AuthenticationComponent } from './authentication.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [{
  path: 'authentication',
  component: AuthenticationComponent,

}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
