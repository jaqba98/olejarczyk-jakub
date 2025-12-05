import { Injectable } from '@angular/core';

import { RawStateModel } from '../../../model/state/raw-state.model';
import { TechnologyMapperModel } from '../../../model/mapper/technology-mapper.model';

@Injectable({ providedIn: 'root' })
export class TechnologyMapperBuilder {
  build(state: RawStateModel): TechnologyMapperModel {
    const { technologyCategory, technology } = state;
    const technologies = Object.values(technology);
    return {
      technology: Object.entries(technologyCategory).map(([kind, category]) => ({
        category,
        technologies: technologies.filter((technology) => technology.categoryKind === kind),
      })),
    };
  }
}
