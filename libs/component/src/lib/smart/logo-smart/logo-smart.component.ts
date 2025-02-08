import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { LogoDumbComponent } from '../../dumb/logo-dumb/logo-dumb.component';
import { MenuState } from '@olejarczyk-jakub/store';

@Component({
  selector: 'lib-logo-smart',
  providers: [LogoDumbComponent],
  templateUrl: './logo-smart.component.html',
  imports: [LogoDumbComponent],
})
export class LogoSmartComponent implements OnDestroy {
  title!: string;

  private sub: Subscription;

  constructor(private readonly store: Store) {
    this.sub = this.store.select(MenuState.getTitle).subscribe((title) => {
      this.title = title;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
