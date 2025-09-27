import { TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngxs/store';
import { CompanyState, CompanyStateModel } from './company.state';
import { CompanyAction } from './company.actions';

describe('Company store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([CompanyState])],
    });

    store = TestBed.inject(Store);
  });

  it('should create an action and add an item', () => {
    const expected: CompanyStateModel = {
      items: ['item-1'],
    };
    store.dispatch(new CompanyAction('item-1'));
    const actual = store.selectSnapshot(CompanyState.getState);
    expect(actual).toEqual(expected);
  });
});
