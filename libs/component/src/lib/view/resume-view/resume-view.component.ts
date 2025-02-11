import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';

import { BaseComponent } from '../../base/base.component';
import { ButtonSmartComponent } from '../../smart/button-smart/button-smart.component';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';

@Component({
  selector: 'lib-resume-view',
  imports: [
    CommonModule,
    ButtonSmartComponent,
    BaseViewComponent,
    TitleViewComponent,
  ],
  templateUrl: './resume-view.component.html',
  styleUrl: './resume-view.component.scss',
})
export class ResumeViewComponent extends BaseComponent {
  constructor(
    protected override readonly store: Store,
    private readonly http: HttpClient
  ) {
    super(store);
  }

  onClick() {
    const fileUrl = 'olejarczyk-jakub.txt';
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileUrl;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }
}
