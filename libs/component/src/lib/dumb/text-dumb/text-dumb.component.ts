import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-text-dumb',
  imports: [CommonModule],
  templateUrl: './text-dumb.component.html',
  styleUrl: './text-dumb.component.scss',
})
export class TextDumbComponent {
  @Input() isUppercase = false;

  @Input() isSecondaryTextColor = false;

  @Input() isAccentTextColor = false;

  @Input() isLatterSpacing = false;

  @Input() isMediumSize = false;

  @Input() isTextCenter = false;

  getClassList() {
    return {
      text__uppercase: this.isUppercase,
      'text__secondary-text-color': this.isSecondaryTextColor,
      'text__accent-text-color': this.isAccentTextColor,
      'text__letter-spacing': this.isLatterSpacing,
      'text__medium-size': this.isMediumSize,
      'text__text-center': this.isTextCenter,
    };
  }
}
