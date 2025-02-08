import { State } from '@ngxs/store';

import { HamburgerModel } from '../model/hamburger.model';

@State<HamburgerModel>({
  name: 'hamburger',
  defaults: {
    isOpen: false,
  },
})
export class HamburgerState {}
