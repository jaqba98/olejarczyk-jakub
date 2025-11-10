import { Injectable } from '@angular/core';

import { LayoutModel } from '../model/layout.model';
import { KindLayoutEnum } from '../enum/kind-layout.enum';
import { KindDataEnum } from '../../data/enum/kind-data.enum';

@Injectable()
export class LayoutBuilder {
  build(): LayoutModel {
    return {
      kind: KindLayoutEnum.group,
      data: {
        kind: KindDataEnum.empty,
      },
      children: [
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'nav',
            label: 'Nav',
            href: '#nav',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'home',
            label: 'Home',
            href: '#home',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'about-me',
            label: 'About me',
            href: '#about-me',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'technology',
            label: 'Technology',
            href: '#technology',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'skill',
            label: 'Skill',
            href: '#skill',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'experience',
            label: 'Experience',
            href: '#experience',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'resume',
            label: 'Resume',
            href: '#resume',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'education',
            label: 'Education',
            href: '#education',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'project',
            label: 'Project',
            href: '#project',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'project',
            label: 'Project',
            href: '#project',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'contact',
            label: 'Contact',
            href: '#contact',
          },
        },
        {
          kind: KindLayoutEnum.leaf,
          data: {
            kind: KindDataEnum.section,
            id: 'footer',
            label: 'Footer',
            href: '#footer',
          },
        },
      ],
    };
  }
}
