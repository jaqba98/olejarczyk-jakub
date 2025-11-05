import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { FooterStoreModel } from '../model/store/footer-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';
import { PersonalDataBuilder } from '../../builder/data/personal-data.builder';
import { FooterDataBuilder } from '../../builder/data/footer-data.builder';

@State<FooterStoreModel>({
  name: 'footer',
  defaults: {
    ownSection: SectionDataBuilder.buildDataForKind('footer'),
    personalData: PersonalDataBuilder.buildData(),
    footerData: FooterDataBuilder.buildData(),
  },
})
@Injectable()
export class FooterStoreState {
  @Selector()
  static getState(state: FooterStoreModel) {
    return state;
  }
}
