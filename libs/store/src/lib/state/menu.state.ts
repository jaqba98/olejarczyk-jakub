import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

import { MenuModel } from '@olejarczyk-jakub/model';
import { MenuSwitchAction } from '../action/menu-switch.action';

@State<MenuModel>({
  name: 'hamburger',
  defaults: {
    isOpen: false,
  },
})
export class MenuState {
  constructor(private readonly store: Store) {}

  @Selector()
  static getIsOpen(state: MenuModel): MenuModel['isOpen'] {
    return state.isOpen;
  }

  @Action(MenuSwitchAction)
  switchMenu(ctx: StateContext<MenuModel>) {
    const isOpen = this.store.selectSnapshot(MenuState.getIsOpen);
    ctx.patchState({ isOpen: !isOpen });
  }
}
