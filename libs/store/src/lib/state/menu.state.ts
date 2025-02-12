import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MenuModel, LogoEnum } from '@olejarczyk-jakub/model';
import { MenuSwitchAction } from '../action/menu-switch.action';
import { MenuSetLogoAction } from '../action/menu-set-logo.action';
import { MenuSetIsOpenAction } from '../action/menu-set-is-open.action';

@State<MenuModel>({
  name: 'menu',
  defaults: {
    isOpen: false,
    logo: LogoEnum.short,
  },
})
export class MenuState {
  @Selector()
  static getIsOpen(state: MenuModel): MenuModel['isOpen'] {
    return state.isOpen;
  }

  @Selector()
  static getLogo(state: MenuModel): MenuModel['logo'] {
    return state.logo;
  }

  @Action(MenuSwitchAction)
  switch(ctx: StateContext<MenuModel>) {
    const isOpen = ctx.getState().isOpen;
    ctx.patchState({ isOpen: !isOpen });
  }

  @Action(MenuSetIsOpenAction)
  setIsOpen(ctx: StateContext<MenuModel>, action: MenuSetIsOpenAction) {
    ctx.patchState({ isOpen: action.payload });
  }

  @Action(MenuSetLogoAction)
  setLogo(ctx: StateContext<MenuModel>, action: MenuSetLogoAction) {
    ctx.patchState({ logo: action.payload });
  }
}
