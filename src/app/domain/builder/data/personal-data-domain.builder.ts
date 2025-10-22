import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { PersonalDataViewDomainModel } from '../../model/view/data/personal-data-view-domain.model';
import { PersonalDataDomainState } from '../../state/data/personal-data-domain.state';

@Injectable()
export class PersonalDataDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<PersonalDataViewDomainModel> {
    return this.store.selectOnce(PersonalDataDomainState.getState);
  }
}
