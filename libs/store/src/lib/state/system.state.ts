import { State } from '@ngxs/store';

import { MediaEnum, SystemModel } from '@olejarczyk-jakub/model';

@State<SystemModel>({
  name: 'system',
  defaults: {
    media: MediaEnum.mobileSmall,
  },
})
export class SystemState {}
