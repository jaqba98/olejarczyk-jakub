import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { FooterStoreModel } from '../model/footer-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<FooterStoreModel>({
  name: 'footer',
  defaults: {
    sectionData: SectionDomainFinder.findDataByKind('footer'),
  },
})
@Injectable()
export class FooterStoreState {
  @Selector()
  static getState(state: FooterStoreModel) {
    return state;
  }
}
