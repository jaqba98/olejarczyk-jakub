import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import { RootStoreState } from '../../store/state/root-store.state';
import { getSection } from '../../decorator/section.decorator';

import '../section/nav/nav-section.component';
import '../section/home/home-section.component';
import '../section/about-me/about-me-section.component';
import '../section/technology/technology-section.component';
import '../section/skill/skill-section.component';
import '../section/experience/experience-section.component';
import '../section/resume/resume-section.component';
import '../section/education/education-section.component';
import '../section/project/project-section.component';
import '../section/contact/contact-section.component';
import '../section/footer/footer-section.component';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  imports: [CommonModule],
})
export class RootComponent {
  sections$;

  constructor(private readonly store: Store) {
    this.sections$ = this.store
      .selectOnce(RootStoreState.getState)
      .pipe(map((state) => state.sections.map((section) => getSection(section.metadata.kind))));
  }
}
