import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { HeaderService } from './header.service';
import { MainMenuEnum } from 'src/app/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  headerDataObserver: any;
  page: MainMenuEnum;

  constructor(
    private userService: UserService,
    private headerService: HeaderService,
    private authenticationService: AuthenticationService
  ) {
    this.getUser()

    this.page = headerService.getPage();
    this.headerDataObserver = this.headerService.getDataObservable();
    this.headerDataObserver.subscribe((data: any) => {
        this.page = data.page;
      }
    );
  }

  async getUser() {
    this.user = await this.userService.getUser()
  }

  ngOnInit(): void {
  }

  public get mainMenuEnum(): typeof MainMenuEnum {
    return MainMenuEnum;
  }

  logout() {
    this.authenticationService.logout();
  }

}
