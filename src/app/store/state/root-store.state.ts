import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { RootStoreModel } from '../model/store/root-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<RootStoreModel>({
  name: 'root',
  defaults: {
    sections: SectionDataBuilder.buildDataForAllSections(),
  },
})
@Injectable()
export class RootStoreState {
  @Selector()
  static getState(state: RootStoreModel) {
    return state;
  }
}
