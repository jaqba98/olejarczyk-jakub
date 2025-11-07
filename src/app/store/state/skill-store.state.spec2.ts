// import { TestBed } from '@angular/core/testing';
// import { StoreProvider } from '../provider/store.provider';
// import { Store } from '@ngxs/store';
// import { firstValueFrom } from 'rxjs';

// import { SkillStoreModel } from '../model/store/skill-store.model';
// import { SkillStoreState } from './skill-store.state';
// import { SectionBuilder } from '../../builder/service/section.builder';
// import { SkillBuilder } from '../../builder/service/skill.builder';

// describe('Skill Store State', () => {
//   let store: Store;

//   beforeAll(() => {
//     TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
//     store = TestBed.inject(Store);
//   });

//   it('Should return the correct data', async () => {
//     const result: SkillStoreModel = {
//       ownSection: SectionBuilder.buildDataForKind('skill'),
//       skill: SkillBuilder.buildData(),
//     };
//     expect(await firstValueFrom(store.selectOnce(SkillStoreState.getState))).toEqual(result);
//   });
// });
