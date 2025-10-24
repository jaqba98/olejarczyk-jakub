import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SectionDataStateDomainModel } from '../../../data/const/model/section-data.model';
import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { sectionDataDomainConst } from '../../../data/const/section-data.const';

@State<SectionDataStateDomainModel>({
  name: StateNameDomainEnum.sectionData,
  defaults: sectionDataDomainConst,
})
@Injectable()
export class SectionDataDomainState {
  @Selector()
  static getState(state: SectionDataStateDomainModel) {
    return state;
  }
}
