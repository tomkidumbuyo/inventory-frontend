import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotAllowedComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    RouterModule,
  ],
  exports: [
    MatSnackBarModule,
    HeaderComponent,
    FooterComponent,
    NotAllowedComponent
  ]
})
export class SharedModule { }
