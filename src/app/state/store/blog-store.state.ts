import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { BlogStateModel } from '../model/blog-state.model';

@State<BlogStateModel>({
  name: 'blog',
  defaults: {},
})
@Injectable()
export class BlogStoreState {
  @Selector()
  static getState(state: BlogStateModel) {
    return state;
  }
}
