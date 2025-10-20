import { Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { StoreUtil } from '../util/store.util';
import { ExperienceBuilder } from './experience.builder';

describe('Experience builder', () => {
  let store: Store;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreUtil.getProvide(), ExperienceBuilder],
    });
    store = TestBed.inject(Store);
  });

  afterAll(() => {
    store.reset(null);
  });

  it('Should return correct experience data', async () => {
    const service = TestBed.inject(ExperienceBuilder);
    const result = await firstValueFrom(service.build());
    expect(result).toBe([]);
  });
});
