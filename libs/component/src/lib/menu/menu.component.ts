import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ButtonComponent } from '../dumb/button-dumb/button-dumb.component';

@Component({
  selector: 'lib-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() horizontal = false;

  isVisible = false;
}
