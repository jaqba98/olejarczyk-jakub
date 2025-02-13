import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LogoEnum, profession, SectionEnum } from '@olejarczyk-jakub/model';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';

@Component({
  selector: 'lib-home-view',
  imports: [CommonModule, BaseViewComponent, TextSmartComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {
  readonly id = SectionEnum.home;

  readonly logo = LogoEnum.full;

  readonly profession = profession;
}
