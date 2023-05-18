import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ErrorMessages } from '../authentication.error';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authenticationForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private AuthenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private errorHandlerService: ErrorHandlerService
  ) {
    errorHandlerService.setErrorMessages(ErrorMessages)
  }

  ngOnInit(): void {}

  get formControls() {
    return this.authenticationForm.controls;
  }

  login(): void {
    // TODO handle form invalid
    if (this.authenticationForm.invalid) {
      return;
    }
    this.AuthenticationService.login(
      this.authenticationForm.value.username,
      this.authenticationForm.value.password
    ).then(
      (data: any) => {
        console.log(data)
        this.router.navigate(["/"]);
      },
      (error) => {
        this.snackBar.open(this.errorHandlerService.getErrorMessage(error), "Close", {
          verticalPosition: "top",
        });
      }
    );
  }
}
