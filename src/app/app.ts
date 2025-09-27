import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CounterState } from './counter/counter.state';
import { CounterAction } from './counter/counter.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  count$: Observable<number>;

  constructor(private readonly store: Store) {
    this.count$ = this.store.select(CounterState.getCount);
  }

  increment() {
    this.store.dispatch(new CounterAction());
  }
}
