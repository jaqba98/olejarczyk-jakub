import { NavSectionStateDomainModel } from '../../model/state/section/nav-section-state-domain.model';

export const navSectionDomainConst: NavSectionStateDomainModel = {
  options: {
    nav: {
      id: 'nav',
      order: 0,
      visible: false,
      primary: false,
    },
    home: {
      id: 'home',
      order: 1,
      visible: true,
      primary: false,
    },
    aboutMe: {
      id: 'aboutMe',
      order: 2,
      visible: true,
      primary: false,
    },
    technology: {
      id: 'technology',
      order: 3,
      visible: true,
      primary: false,
    },
  },
};
