import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphTextComponent } from '../../text/paragraph/paragraph-text.component';
import { PaddingUtilComponent } from '../../util/padding/padding-util.component';

@Component({
  selector: 'footer-view',
  templateUrl: './footer-view.component.html',
  styleUrl: './footer-view.component.scss',
  imports: [CommonModule, ParagraphTextComponent, PaddingUtilComponent],
})
export class FooterViewComponent {}
