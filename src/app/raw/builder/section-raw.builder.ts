import { Injectable } from '@angular/core';

import { SectionRawModel } from '../../model/raw/section-raw.model';

@Injectable({ providedIn: 'root' })
export class SectionRawBuilder {
  build(): SectionRawModel {
    return {
      nav: {
        id: 'nav',
        label: 'Nav',
        href: '#nav',
      },
      home: {
        id: 'home',
        label: 'Home',
        href: '#home',
      },
      aboutMe: {
        id: 'about-me',
        label: 'About me',
        href: '#about-me',
      },
      technology: {
        id: 'technology',
        label: 'Technology',
        href: '#technology',
      },
      skill: {
        id: 'skill',
        label: 'Skill',
        href: '#skill',
      },
      experience: {
        id: 'experience',
        label: 'Experience',
        href: '#experience',
      },
      resume: {
        id: 'resume',
        label: 'Resume',
        href: '#resume',
      },
      education: {
        id: 'education',
        label: 'Education',
        href: '#education',
      },
      project: {
        id: 'project',
        label: 'Project',
        href: '#project',
      },
      contact: {
        id: 'contact',
        label: 'Contact',
        href: '#contact',
      },
      footer: {
        id: 'footer',
        label: 'Footer',
        href: '#footer',
      },
    };
  }
}
