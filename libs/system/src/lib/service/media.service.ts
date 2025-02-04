import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

export type MediaType = 'mobile' | 'tablet' | 'desktop' | 'tv';

@Injectable({ providedIn: 'root' })
export class MediaService {
  media$: Observable<MediaType>;

  constructor(private readonly obs: BreakpointObserver) {
    this.media$ = this.obs
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((result) => {
          if (
            result.breakpoints[Breakpoints.XSmall] ||
            result.breakpoints[Breakpoints.Small]
          ) {
            return 'mobile';
          } else if (result.breakpoints[Breakpoints.Medium]) {
            return 'tablet';
          } else if (result.breakpoints[Breakpoints.Large]) {
            return 'desktop';
          } else {
            return 'tv';
          }
        })
      );
  }
}
