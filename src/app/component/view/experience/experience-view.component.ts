import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faClock, faFileContract, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import dateFormat from 'dateformat';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { ParagraphDumbComponent } from '../../dumb/paragraph/paragraph-dumb.component';
import { SectionDumbComponent } from '../../dumb/section/section-dumb.component';
import { LineDumbComponent } from '../../dumb/line/line-dumb.component';
import { ChildDumbComponent } from '../../dumb/child/child-dumb.component';
import { MarkDumbComponent } from '../../dumb/mark/mark-dumb.component';
import { SmallDumbComponent } from '../../dumb/small/small-dumb.component';
import { ExperienceModel } from '../../../store/experience/experience-state.model';
import { CompanyModel } from '../../../store/company/company-state.model';
import { TechnologyDumbComponent } from '../../dumb/technology/technology-dumb.component';
import { HeaderDumbComponent } from '../../dumb/header/header-dumb.component';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [
    CommonModule,
    ParagraphDumbComponent,
    SectionDumbComponent,
    LineDumbComponent,
    ChildDumbComponent,
    MarkDumbComponent,
    SmallDumbComponent,
    FontAwesomeModule,
    TechnologyDumbComponent,
    HeaderDumbComponent,
  ],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experiences$;

  faLocationDot = faLocationDot;

  faFileContract = faFileContract;

  faClock = faClock;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experiences$ = this.builder.build();
  }

  getTitle(experience: ExperienceModel, company: CompanyModel) {
    return `${experience.title} · ${company.name}`;
  }

  getDate(experience: ExperienceModel) {
    const startUTC = dateFormat(experience.startDate, 'yyyy-mm-dd');
    let endUTC;
    if (experience.endDate) {
      endUTC = dateFormat(experience.endDate, 'yyyy-mm-dd');
    } else {
      endUTC = 'Current';
    }
    return `${startUTC} · ${endUTC}`;
  }
}
