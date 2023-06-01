import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';
import { MainMenuEnum } from '../types';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
  ) {
    this.headerService.setPage(MainMenuEnum.MOVEMENT);
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
