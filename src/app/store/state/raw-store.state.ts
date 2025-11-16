import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { InitRawStoreAction } from '../action/init-store.action';
import { RawStoreModel } from '../model/raw-store.model';
import { WebsiteRawBuilder } from '../../raw/builder/website-raw.builder';
import { PersonalRawBuilder } from '../../raw/builder/personal-raw.builder';
import { SectionRawBuilder } from '../../raw/builder/section-raw.builder';

@State<RawStoreModel>({
  name: 'raw',
})
@Injectable()
export class RawStoreState {
  constructor(
    private readonly personalRaw: PersonalRawBuilder,
    private readonly sectionRaw: SectionRawBuilder,
    private readonly websiteRaw: WebsiteRawBuilder,
  ) {}

  @Action(InitRawStoreAction)
  init(ctx: StateContext<RawStoreModel>) {
    ctx.patchState({
      personal: this.personalRaw.build(),
      section: this.sectionRaw.build(),
      website: this.websiteRaw.build(),
    });
  }
}
