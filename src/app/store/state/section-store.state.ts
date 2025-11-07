import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SectionStoreModel } from '../model/section-store.model';
import { SectionLayoutBuilder } from '../../layout/builder/section-layout.builder';

@State<SectionStoreModel>({
  name: 'section',
  defaults: {
    layout: SectionLayoutBuilder.build(),
  },
})
@Injectable()
export class SectionStoreState {
  @Selector()
  static getState(state: SectionStoreModel) {
    return state;
  }
}
