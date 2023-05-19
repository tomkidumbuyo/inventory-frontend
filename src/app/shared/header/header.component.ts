import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.getUser()
  }

  async getUser() {
    this.user = await this.userService.getUser()
    console.log(this.user)
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
