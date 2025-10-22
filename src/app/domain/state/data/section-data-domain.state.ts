import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { SectionDataStateDomainModel } from '../../model/state/data/section-data-state-domain.model';
import { StateNameDomainEnum } from '../../enum/state-name-domain.enum';
import { sectionDataDomainConst } from '../../const/data/section-data-domain.const';

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
