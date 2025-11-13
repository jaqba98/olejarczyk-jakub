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
              hasTitle: false,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: true,
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
              hasTitle: false,
            },
          },
        },
      ],
    };
  }
}
