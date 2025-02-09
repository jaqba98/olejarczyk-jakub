import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MenuModel, TitleEnum } from '@olejarczyk-jakub/model';
import { MenuSwitchAction } from '../action/menu-switch.action';
import { MenuSetTitleAction } from '../action/menu-set-title.action';
import { MenuSetIsOpenAction } from '../action/menu-set-is-open.action';

@State<MenuModel>({
  name: 'menu',
  defaults: {
    isOpen: false,
    title: TitleEnum.short,
  },
})
export class MenuState {
  @Selector()
  static getIsOpen(state: MenuModel): MenuModel['isOpen'] {
    return state.isOpen;
  }

  @Selector()
  static getTitle(state: MenuModel): MenuModel['title'] {
    return state.title;
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

  @Action(MenuSetTitleAction)
  setTitle(ctx: StateContext<MenuModel>, action: MenuSetTitleAction) {
    ctx.patchState({ title: action.payload });
  }
}
