import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [{
  path: 'authentication',
  component: AuthenticationComponent,
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
