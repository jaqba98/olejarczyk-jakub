import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

import { MediaEnum } from '../enum/media.enum';

@Injectable({ providedIn: 'root' })
export class MediaService {
  media$: Observable<MediaEnum>;

  constructor(private readonly breakpoint: BreakpointObserver) {
    this.media$ = this.breakpoint
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((type) => {
          const { breakpoints } = type;
          if (breakpoints[Breakpoints.XSmall]) return MediaEnum.mobileSmall;
          if (breakpoints[Breakpoints.Small]) return MediaEnum.mobileLarge;
          if (breakpoints[Breakpoints.Medium]) return MediaEnum.tablet;
          if (breakpoints[Breakpoints.Large]) return MediaEnum.desktop;
          if (breakpoints[Breakpoints.XLarge]) return MediaEnum.tv;
          return MediaEnum.tv;
        })
      );
  }
}
