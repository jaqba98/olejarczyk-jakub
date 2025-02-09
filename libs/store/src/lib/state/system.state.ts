import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MediaEnum, SectionEnum, SystemModel } from '@olejarczyk-jakub/model';
import { SystemSetMediaAction } from '../action/system-set-media.action';
import { SystemSetSectionAction } from '../action/system-set-section.action';

@State<SystemModel>({
  name: 'system',
  defaults: {
    media: MediaEnum.mobileSmall,
    section: SectionEnum.home,
  },
})
export class SystemState {
  @Selector()
  static getMedia(state: SystemModel): SystemModel['media'] {
    return state.media;
  }

  @Selector()
  static getSection(state: SystemModel): SystemModel['section'] {
    return state.section;
  }

  @Action(SystemSetMediaAction)
  switch(ctx: StateContext<SystemModel>, action: SystemSetMediaAction) {
    ctx.patchState({ media: action.payload });
  }

  @Action(SystemSetSectionAction)
  setSection(ctx: StateContext<SystemModel>, action: SystemSetSectionAction) {
    ctx.patchState({ section: action.payload });
  }
}
