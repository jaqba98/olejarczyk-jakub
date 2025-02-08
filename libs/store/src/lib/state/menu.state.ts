import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MenuModel } from '@olejarczyk-jakub/model';
import { MenuSwitchAction } from '../action/menu-switch.action';

@State<MenuModel>({
  name: 'menu',
  defaults: {
    isOpen: false,
  },
})
export class MenuState {
  @Selector()
  static getIsOpen(state: MenuModel): MenuModel['isOpen'] {
    return state.isOpen;
  }

  @Action(MenuSwitchAction)
  switchMenu(ctx: StateContext<MenuModel>) {
    const isOpen = ctx.getState().isOpen;
    ctx.patchState({ isOpen: !isOpen });
  }
}
