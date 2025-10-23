import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SocialMediaDataViewDomainModel } from '../../model/view/data/social-media-data-view-domain.model';
import { SocialMediaDataDomainState } from '../../state/data/social-media-data-domain.state';

@Injectable()
export class SocialMediaDataDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<SocialMediaDataViewDomainModel> {
    return this.store.selectOnce(SocialMediaDataDomainState.getState);
  }
}
