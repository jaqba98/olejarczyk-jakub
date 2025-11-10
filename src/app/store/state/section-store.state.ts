import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SectionStoreModel } from '../model/section-store.model';

@State<SectionStoreModel>({
  name: 'section',
  // defaults: {
  //   section: SectionLayoutBuilder.build(),
  // },
})
@Injectable()
export class SectionStoreState {
  @Selector()
  static getState(state: SectionStoreModel) {
    return state;
  }
}
