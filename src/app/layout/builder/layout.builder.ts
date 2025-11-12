import { Injectable } from '@angular/core';

import { LayoutModel } from '../model/layout.model';

@Injectable({ providedIn: 'root' })
export class LayoutBuilder {
  build(): LayoutModel {
    return {
      kind: 'group',
      children: [
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'nav',
            label: 'Nav',
            href: '#nav',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'home',
            label: 'Home',
            href: '#home',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'about-me',
            label: 'About me',
            href: '#about-me',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'technology',
            label: 'Technology',
            href: '#technology',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'skill',
            label: 'Skill',
            href: '#skill',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'experience',
            label: 'Experience',
            href: '#experience',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'resume',
            label: 'Resume',
            href: '#resume',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'education',
            label: 'Education',
            href: '#education',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'project',
            label: 'Project',
            href: '#project',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'project',
            label: 'Project',
            href: '#project',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'contact',
            label: 'Contact',
            href: '#contact',
          },
        },
        {
          kind: 'leaf',
          data: {
            kind: 'section',
            id: 'footer',
            label: 'Footer',
            href: '#footer',
          },
        },
      ],
    };
  }
}
