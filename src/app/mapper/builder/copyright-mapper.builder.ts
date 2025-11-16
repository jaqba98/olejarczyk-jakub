import { Injectable } from '@angular/core';

import { CopyrightMapperModel } from '../../model/mapper/copyright-mapper.model';

@Injectable({ providedIn: 'root' })
export class CopyrightMapperBuilder {
  build(): CopyrightMapperModel {
    return {
      copyright: 'Copyright',
    };
  }
}
