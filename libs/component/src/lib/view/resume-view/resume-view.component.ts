import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DownloadService } from '@olejarczyk-jakub/system';
import { SectionEnum } from '@olejarczyk-jakub/model';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { ButtonSmartComponent } from '../../smart/button-smart/button-smart.component';

@Component({
  selector: 'lib-resume-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    ButtonSmartComponent,
  ],
  templateUrl: './resume-view.component.html',
  styleUrl: './resume-view.component.scss',
})
export class ResumeViewComponent {
  readonly id = SectionEnum.resume;

  constructor(private readonly download: DownloadService) {}

  onDownload(event: string) {
    if (event === 'polish') {
      this.download.asset('olejarczyk-jakub-resume-pl.txt');
    } else if (event === 'english') {
      this.download.asset('olejarczyk-jakub-resume-en.txt');
    }
  }
}
