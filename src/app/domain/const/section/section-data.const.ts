import { BaseDataModel } from '../../model/domain.model';
import { BaseFieldDataModel } from '../../model/base-field-data.model';

const build = (
  id: string,
  label: string,
  href: string,
  kind: string,
  routable: boolean,
  order: number,
): BaseFieldDataModel => ({
  kind: 'record',
  value: {
    data: {
      kind: 'record',
      value: {
        id: { kind: 'string', value: id },
        label: { kind: 'string', value: label },
        href: { kind: 'string', value: href },
      },
    },
    metadata: {
      kind: 'record',
      value: {
        kind: { kind: 'string', value: kind },
        routable: { kind: 'boolean', value: routable },
        order: { kind: 'number', value: order },
      },
    },
  },
});

export const sectionDataConst: BaseDataModel = {
  nav: build('nav', 'Nav', '#nav', 'nav', false, 0),
  home: build('home', 'Home', '#home', 'home', true, 1),
  aboutMe: build('about-me', 'About me', '#about-me', 'home', true, 2),
  technology: build('technology', 'Technology', '#technology', 'technology', true, 3),
  skill: build('skill', 'Skill', '#skill', 'skill', true, 4),
  experience: build('experience', 'Experience', '#experience', 'experience', true, 5),
  resume: build('resume', 'Resume', '#resume', 'resume', true, 6),
  education: build('education', 'Education', '#education', 'education', true, 7),
  project: build('project', 'Project', '#project', 'project', true, 8),
  contact: build('contact', 'Contact', '#contact', 'contact', true, 9),
  footer: build('footer', 'Footer', '#footer', 'footer', false, 10),
};
