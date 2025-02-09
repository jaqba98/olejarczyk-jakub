import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';
import { HtmlComponent } from '../../language/html/html.component';

@Component({
  selector: 'lib-skills-view',
  imports: [CommonModule, HtmlComponent],
  templateUrl: './skills-view.component.html',
  styleUrl: './skills-view.component.scss',
})
export class SkillsViewComponent extends BaseComponent {
  skills = [
    {
      title: 'Front End',
      technologies: [
        { name: 'HTML', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        { name: 'CSS', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        { name: 'SCSS', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        {
          name: 'JavaScript',
          comment: 'Znam prawie kazdy aspekt tego',
          link: '',
        },
        {
          name: 'TypeScript',
          comment: 'Znam prawie kazdy aspekt tego',
          link: '',
        },
        { name: 'Angular', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        { name: 'NGXS', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        { name: 'RXJS', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        { name: 'PrimeNG', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        {
          name: 'Storybook',
          comment: 'Znam prawie kazdy aspekt tego',
          link: '',
        },
      ],
    },
    {
      title: 'Back End',
      technologies: [
        { name: 'Java', comment: 'Znam prawie kazdy aspekt tego', link: '' },
        { name: 'MySQL', comment: 'Znam prawie kazdy aspekt tego', link: '' },
      ],
    },
    {
      title: 'Tools',
      technologies: [
        {
          name: 'Nx',
          comment:
            'I know how to manage multiple projects within one git control system.',
          link: 'https://nx.dev/',
        },
        {
          name: 'VSC',
          comment: 'Znam prawie kazdy aspekt tego',
          link: '',
        },
        {
          name: 'Webstorm',
          comment: 'Znam prawie kazdy aspekt tego',
          link: '',
        },
      ],
    },
  ];
}
