// import { TestBed } from '@angular/core/testing';
// import { StoreProvider } from '../provider/store.provider';
// import { Store } from '@ngxs/store';
// import { firstValueFrom } from 'rxjs';

// import { EducationStoreModel } from '../model/store/education-store.model';
// import { EducationStoreState } from './education-store.state';
// import { SectionBuilder } from '../../builder/service/section.builder';
// import { EducationBuilder } from '../../builder/service/education.builder';

// describe('Education Store State', () => {
//   let store: Store;

//   beforeAll(() => {
//     TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
//     store = TestBed.inject(Store);
//   });

//   it('Should return the correct data', async () => {
//     const result: EducationStoreModel = {
//       ownSection: SectionBuilder.buildDataForKind('education'),
//       education: EducationBuilder.buildData(),
//     };
//     expect(await firstValueFrom(store.selectOnce(EducationStoreState.getState))).toEqual(result);
//   });
// });
