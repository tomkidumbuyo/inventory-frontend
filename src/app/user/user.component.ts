import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';
import { MainMenuEnum } from '../types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
  ) {
    this.headerService.setPage(MainMenuEnum.USER);
  }

  ngOnInit(): void {
  }

}
