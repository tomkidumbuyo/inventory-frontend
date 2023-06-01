import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MainMenuEnum } from 'src/app/types';

interface observableDataType {
  page: MainMenuEnum
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private dataSource = new Subject();
  private observableData: observableDataType = {page: MainMenuEnum.EQUIPMENT}

  setPage(page: MainMenuEnum) {
    this.observableData.page = page;
    this.dataSource.next(this.observableData)
  }

  getPage(): MainMenuEnum {
    return this.observableData.page;
  }

  getDataObservable() {
    return this.dataSource;
  }

}
