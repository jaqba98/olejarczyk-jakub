import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDataViewDomainModel } from '../../model/view/data/section-data-view-domain.model';
import { SectionDataDomainState } from '../../state/data/section-data-domain.state';

@Injectable()
export class SectionDataDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<SectionDataViewDomainModel> {
    return this.store.selectOnce(SectionDataDomainState.getState);
  }
}
