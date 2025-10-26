import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { FooterStoreModel } from '../model/store/footer-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<FooterStoreModel>({
  name: 'footer',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('footer'),
  },
})
@Injectable()
export class FooterStoreState {
  @Selector()
  static getState(state: FooterStoreModel) {
    return state;
  }
}
