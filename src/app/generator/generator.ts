import { Component, input, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModel } from '../layout/model/layout.model';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [CommonModule],
})
export class Generator {
  @ViewChild('generator', { read: ViewContainerRef })
  generator!: ViewContainerRef;

  model = input.required<LayoutModel>();

  // ngOnInit() {
  //   this.generator.clear();
  //   const model = this.model();
  //   switch (model.kind) {
  //     case 'leaf':
  //       const component = getDomainComponent(model.domain.kind);
  //       const ref: any = this.generator.createComponent(component);
  //       ref.instance.data = model.domain.data;
  //       ref.instance.metadata = model.domain.metadata;
  //       ref.instance.appearance = model.domain.appearance;
  //       ref.instance.children = [];
  //       ref.changeDetectorRef.detectChanges();
  //       break;
  //     case 'group':
  //       const { domain, children } = model;
  //       if (domain) {
  //         const component = getDomainComponent(domain.kind);
  //         const ref: any = this.generator.createComponent(component);
  //         ref.instance.data = domain.data;
  //         ref.instance.metadata = domain.metadata;
  //         ref.instance.appearance = domain.appearance;
  //         ref.instance.children = children;
  //         ref.changeDetectorRef.detectChanges();
  //       } else {
  //         children.forEach((child) => {
  //           const ref = this.generator.createComponent(Generator);
  //           ref.instance.model = child;
  //           ref.changeDetectorRef.detectChanges();
  //         });
  //       }
  //       break;
  //     default:
  //       throw new Error('Not supported kind!');
  //   }
  // }

  // getComponent() {
  //   const { domain } = this.layout();
  //   if (domain) {
  //     return getDomainComponent(domain.kind);
  //   }
  //   throw new Error('The domain is not defined!');
  // }

  // getInputs() {
  //   const selfLayoput = this.layout();
  //   if (selfLayoput.domain) {
  //     const { data, metadata, appearance } = selfLayoput.domain;
  //     const children = selfLayoput.kind === 'group' ? selfLayoput.children : [];
  //     return { data, metadata, appearance, children };
  //   }
  //   throw new Error('The domain is not defined!');
  // }
}
