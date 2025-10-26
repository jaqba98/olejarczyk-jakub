import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BlogStoreModel } from '../model/blog-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<BlogStoreModel>({
  name: 'blog',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('blog'),
  },
})
@Injectable()
export class BlogStoreState {
  @Selector()
  static getState(state: BlogStoreModel) {
    return state;
  }
}
