import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';
import { ButtonSmartComponent } from "../../smart/button-smart/button-smart.component";
import { BaseViewComponent } from "../base-view/base-view.component";

@Component({
  selector: 'lib-resume-view',
  imports: [CommonModule, ButtonSmartComponent, BaseViewComponent],
  templateUrl: './resume-view.component.html',
  styleUrl: './resume-view.component.scss',
})
export class ResumeViewComponent extends BaseComponent {}
