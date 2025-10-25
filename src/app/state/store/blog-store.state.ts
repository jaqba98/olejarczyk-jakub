import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { BlogStateModel } from '../model/blog-state.model';
import { SectionDataFinder } from '../../finder/data/section-data.finder';

@State<BlogStateModel>({
  name: 'blog',
  defaults: {
    sectionData: SectionDataFinder.find('blog'),
  },
})
@Injectable()
export class BlogStoreState {
  @Selector()
  static getState(state: BlogStateModel) {
    return state;
  }
}
