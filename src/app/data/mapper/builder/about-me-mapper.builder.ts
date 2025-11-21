import { Injectable } from '@angular/core';

import { RawStateModel } from '../../../model/state/raw-state.model';
import { AboutMeMapperModel } from '../../../model/mapper/description-mapper.model';

@Injectable({ providedIn: 'root' })
export class AboutMeMapperBuilder {
  build(state: RawStateModel): AboutMeMapperModel {
    const { aboutMe } = state.personal;
    return {
      texts: aboutMe,
    };
  }
}
