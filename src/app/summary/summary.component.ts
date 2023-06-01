import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';
import { MainMenuEnum } from '../types';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
  ) {
    this.headerService.setPage(MainMenuEnum.SUMMARY);
  }

  ngOnInit(): void {
  }

}
