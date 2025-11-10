import { Component } from '@angular/core';

import { LayoutComponentDecorator } from '../../decorator/layout-component.decorator';
import { KindLayoutEnum } from '../../layout/enum/kind-layout.enum';

@Component({
  selector: 'leaf-component',
  templateUrl: './leaf.component.html',
})
@LayoutComponentDecorator(KindLayoutEnum.leaf)
export class LeafComponent {}
