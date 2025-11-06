import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { AboutMeStoreModel } from '../model/store/about-me-store.model';
import { SectionBuilder } from '../../builder/service/section.builder';
import { AboutMeBuilder } from '../../builder/service/about-me.builder';

@State<AboutMeStoreModel>({
  name: 'aboutMe',
  defaults: {
    sectionBuilder: SectionBuilder.buildDataForKind('aboutMe'),
    aboutMeBuilder: AboutMeBuilder.buildData(),
  },
})
@Injectable()
export class AboutMeStoreState {
  @Selector()
  static getState(state: AboutMeStoreModel) {
    return state;
  }
}
