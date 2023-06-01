import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';
import { MainMenuEnum } from '../types';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
  ) {
    this.headerService.setPage(MainMenuEnum.STORES);
  }

  ngOnInit(): void {
  }

}
