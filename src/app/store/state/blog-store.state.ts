import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { BlogStoreModel } from '../model/store/blog-store.model';
import { SectionDataBuilder } from '../../builder/data/section-data.builder';

@State<BlogStoreModel>({
  name: 'blog',
  defaults: {
    ownSectionData: SectionDataBuilder.buildDataForKind('blog'),
  },
})
@Injectable()
export class BlogStoreState {
  @Selector()
  static getState(state: BlogStoreModel) {
    return state;
  }
}
