import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';
import { MainMenuEnum } from '../types';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
  ) {
    this.headerService.setPage(MainMenuEnum.SETTING);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
