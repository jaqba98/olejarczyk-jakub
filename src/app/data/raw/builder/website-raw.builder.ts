import { Injectable } from '@angular/core';

import { WebsiteRawModel } from '../../../model/raw/website-raw.model';

@Injectable({ providedIn: 'root' })
export class WebsiteRawBuilder {
  build(): WebsiteRawModel {
    return {
      creationYear: 2025,
    };
  }
}
