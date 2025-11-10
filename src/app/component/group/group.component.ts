import { Component } from '@angular/core';

import { LayoutComponentDecorator } from '../../decorator/layout-component.decorator';
import { KindLayoutEnum } from '../../layout/enum/kind-layout.enum';

@Component({
  selector: 'group-component',
  templateUrl: './group.component.html',
})
@LayoutComponentDecorator(KindLayoutEnum.group)
export class GroupComponent {}
