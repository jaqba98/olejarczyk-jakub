import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { FooterStateModel } from '../model/footer-state.model';
import { SectionDataFinder } from '../../finder/data/section-data.finder';

@State<FooterStateModel>({
  name: 'footer',
  defaults: {
    sectionData: SectionDataFinder.find('footer'),
  },
})
@Injectable()
export class FooterStoreState {
  @Selector()
  static getState(state: FooterStateModel) {
    return state;
  }
}
