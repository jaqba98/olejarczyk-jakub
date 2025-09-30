import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ExperienceState } from '../../store/experience/experience.state';
import { CompanyState } from '../../store/company/company.state';
import { TechnologyState } from '../../store/technology/technology.state';
import { TechnologyCategoryState } from '../../store/technology-category/technology-category.state';
import { TechnologyGroupState } from '../../store/technology-group/technology-group.state';

@Component({
  selector: 'view-experience',
  imports: [],
  templateUrl: './experience.view.html',
  styleUrl: './experience.view.scss',
})
export class ExperienceView {
  constructor(private readonly store: Store) {
    combineLatest([
      this.store.selectOnce(CompanyState.getCompanies),
      this.store.selectOnce(ExperienceState.getExperience),
      this.store.selectOnce(TechnologyState.getTechnologies),
      this.store.selectOnce(TechnologyCategoryState.getTechnologyCategories),
      this.store.selectOnce(TechnologyGroupState.getTechnologyGroups),
    ])
      .pipe(
        map(([companies, experiences, technologies, categories, groups]) => ({
          companies,
          experiences,
          technologies,
          categories,
          groups,
        })),
        tap((data) => console.log(data)),
      )
      .subscribe(() => {});
  }
}
