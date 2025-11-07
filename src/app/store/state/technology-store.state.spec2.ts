// import { TestBed } from '@angular/core/testing';
// import { StoreProvider } from '../provider/store.provider';
// import { Store } from '@ngxs/store';
// import { firstValueFrom } from 'rxjs';

// import { TechnologyStoreModel } from '../model/store/technology-store.model';
// import { TechnologyStoreState } from './technology-store.state';
// import { SectionBuilder } from '../../builder/service/section.builder';
// import { TechnologyBuilder } from '../../builder/service/technology.builder';

// describe('Technology Store State', () => {
//   let store: Store;

//   beforeAll(() => {
//     TestBed.configureTestingModule({ providers: [StoreProvider.getProvider(), Store] });
//     store = TestBed.inject(Store);
//   });

//   it('Should return the correct data', async () => {
//     const result: TechnologyStoreModel = {
//       ownSection: SectionBuilder.buildDataForKind('technology'),
//       technology: TechnologyBuilder.buildData(),
//     };
//     expect(await firstValueFrom(store.selectOnce(TechnologyStoreState.getState))).toEqual(result);
//   });
// });
