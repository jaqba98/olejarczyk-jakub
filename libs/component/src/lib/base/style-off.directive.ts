import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libStyleOffDirective]',
})
export class StyleOffDirective {
  @HostBinding('style.display') display = 'contents';
}
