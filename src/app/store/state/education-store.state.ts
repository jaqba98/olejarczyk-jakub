import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { EducationStoreModel } from '../model/education-store.model';
import { SectionDomainFinder } from '../../finder/domain/section-domain.finder';

@State<EducationStoreModel>({
  name: 'education',
  defaults: {
    sectionData: SectionDomainFinder.findByKind('education'),
  },
})
@Injectable()
export class EducationStoreState {
  @Selector()
  static getState(state: EducationStoreModel) {
    return state;
  }
}
