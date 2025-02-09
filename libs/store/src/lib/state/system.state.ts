import { Action, Selector, State, StateContext } from '@ngxs/store';

import { MediaEnum, SystemModel } from '@olejarczyk-jakub/model';
import { SystemSetMediaAction } from '../action/system-set-media.action';

@State<SystemModel>({
  name: 'system',
  defaults: {
    media: MediaEnum.mobileSmall,
  },
})
export class SystemState {
  @Selector()
  static getMedia(state: SystemModel): SystemModel['media'] {
    return state.media;
  }

  @Action(SystemSetMediaAction)
  switch(ctx: StateContext<SystemModel>, action: SystemSetMediaAction) {
    ctx.patchState({ media: action.payload });
  }
}
