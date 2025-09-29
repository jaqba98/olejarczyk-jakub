import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

export interface CompanyStateModel {
  items: string[];
}

@State<CompanyStateModel>({
  name: 'company',
  defaults: {
    items: [],
  },
})
@Injectable()
export class CompanyState {
  @Selector()
  static getState(state: CompanyStateModel) {
    return state;
  }
}
