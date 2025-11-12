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
          complex: {
            kind: 'section',
            data: {
              id: 'nav',
              label: 'Nav',
              href: '#nav',
            },
            metadata: {
              test: false,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'home',
              label: 'Home',
              href: '#home',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'about-me',
              label: 'About me',
              href: '#about-me',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'technology',
              label: 'Technology',
              href: '#technology',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'skill',
              label: 'Skill',
              href: '#skill',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'experience',
              label: 'Experience',
              href: '#experience',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'resume',
              label: 'Resume',
              href: '#resume',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'education',
              label: 'Education',
              href: '#education',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'project',
              label: 'Project',
              href: '#project',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'contact',
              label: 'Contact',
              href: '#contact',
            },
            metadata: {
              test: true,
            },
          },
        },
        {
          kind: 'leaf',
          complex: {
            kind: 'section',
            data: {
              id: 'footer',
              label: 'Footer',
              href: '#footer',
            },
            metadata: {
              test: false,
            },
          },
        },
      ],
    };
  }
}
