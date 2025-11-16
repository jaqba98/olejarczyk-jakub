// import { Selector, State } from '@ngxs/store';
// import { Injectable } from '@angular/core';

// import { HomeStoreModel } from '../model/store/home-store.model';
// import { SectionBuilder } from '../../builder/service/section.builder';
// import { PersonalBuilder } from '../../builder/service/personal.builder';
// import { SocialMediaBuilder } from '../../builder/service/social-media.builder';
// import { HomeBuilder } from '../../builder/service/home.builder';

// @State<HomeStoreModel>({
//   name: 'home',
//   defaults: {
//     ownSection: SectionBuilder.buildDataForKind('home'),
//     personal: PersonalBuilder.buildData(),
//     socialMedia: SocialMediaBuilder.buildData(),
//     home: HomeBuilder.buildData(),
//   },
// })
// @Injectable()
// export class HomeStoreState {
//   @Selector()
//   static getState(state: HomeStoreModel) {
//     return state;
//   }
// }
