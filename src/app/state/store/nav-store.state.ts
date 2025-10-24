import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { NavStateModel } from '../model/nav-state.model';
import { personalDataConst } from '../../data/const/personal-data.const';
import { sectionDataConst } from '../../data/const/section-data.const';

@State<NavStateModel>({
  name: 'nav',
  defaults: {
    personalData: personalDataConst,
    sectionData: {
      home: sectionDataConst.home,
      aboutMe: sectionDataConst.aboutMe,
      technology: sectionDataConst.technology,
      skill: sectionDataConst.skill,
      experience: sectionDataConst.experience,
      resume: sectionDataConst.resume,
      education: sectionDataConst.education,
      project: sectionDataConst.project,
      blog: sectionDataConst.blog,
      contact: sectionDataConst.contact,
    },
  },
})
@Injectable()
export class NavStoreState {
  @Selector()
  static getState(state: NavStateModel) {
    return state;
  }
}
