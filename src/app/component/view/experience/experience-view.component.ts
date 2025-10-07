import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceBuilder } from '../../../builder/experience.builder';
import { ParagraphDumbComponent } from '../../dumb/paragraph/paragraph-dumb.component';
import { SectionDumbComponent } from '../../dumb/section/section-dumb.component';
import { MarginAutoDumbComponent } from '../../dumb/margin-auto/margin-auto-dumb.component';
import { ChildrenDumbComponent } from '../../dumb/children/children-dumb.component';
import { LineDumbComponent } from '../../dumb/line/line-dumb.component';
import { ChildDumbComponent } from '../../dumb/child/child-dumb.component';
import { MarkDumbComponent } from '../../dumb/mark/mark-dumb.component';
import { Header4DumbComponent } from '../../dumb/header4/header4-dumb.component';
import { SmallDumbComponent } from '../../dumb/small/small-dumb.component';
import { ExperienceModel } from '../../../store/experience/experience-state.model';
import { CompanyModel } from '../../../store/company/company-state.model';

@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  styleUrl: './experience-view.component.scss',
  imports: [
    CommonModule,
    ParagraphDumbComponent,
    SectionDumbComponent,
    MarginAutoDumbComponent,
    ChildrenDumbComponent,
    LineDumbComponent,
    ChildDumbComponent,
    MarkDumbComponent,
    Header4DumbComponent,
    SmallDumbComponent,
  ],
  providers: [ExperienceBuilder],
})
export class ExperienceViewComponent {
  experiences$;

  constructor(private readonly builder: ExperienceBuilder) {
    this.experiences$ = this.builder.build();
  }

  getTitle(experience: ExperienceModel, company: CompanyModel) {
    return `${experience.title} · ${company.name}`;
  }

  getDate(experience: ExperienceModel) {
    const startDate = experience.startDate.toDateString();
    const endDate = experience.endDate?.toDateString() ?? 'Present';
    return `${startDate} · ${endDate}`;
  }
}
