import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

import { MediaEnum } from '@olejarczyk-jakub/model';

@Injectable({ providedIn: 'root' })
export class MediaService {
  media$: Observable<MediaEnum>;

  // private readonly breakpoints: MediaEnum[] = [
  //   MediaEnum.mobileSmall,
  //   MediaEnum.mobileLarge,
  //   MediaEnum.tablet,
  //   MediaEnum.desktop,
  //   MediaEnum.tv,
  // ];

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

  // lessOrEqual(currMedia: MediaEnum, targetMedia: MediaEnum) {
  //   switch (targetMedia) {
  //     case MediaEnum.mobileSmall:
  //       return this.breakpoints.slice(0, 1).includes(currMedia);
  //     case MediaEnum.mobileLarge:
  //       return this.breakpoints.slice(0, 2).includes(currMedia);
  //     case MediaEnum.tablet:
  //       return this.breakpoints.slice(0, 3).includes(currMedia);
  //     case MediaEnum.desktop:
  //       return this.breakpoints.slice(0, 4).includes(currMedia);
  //     case MediaEnum.tv:
  //       return this.breakpoints.slice(0, 5).includes(currMedia);
  //     default:
  //       throw new Error('Not supported media type!');
  //   }
  // }

  // more(currMedia: MediaEnum, targetMedia: MediaEnum) {
  //   switch (targetMedia) {
  //     case MediaEnum.mobileSmall:
  //       return this.breakpoints.slice(1).includes(currMedia);
  //     case MediaEnum.mobileLarge:
  //       return this.breakpoints.slice(2).includes(currMedia);
  //     case MediaEnum.tablet:
  //       return this.breakpoints.slice(3).includes(currMedia);
  //     case MediaEnum.desktop:
  //       return this.breakpoints.slice(4).includes(currMedia);
  //     case MediaEnum.tv:
  //       return this.breakpoints.slice(5).includes(currMedia);
  //     default:
  //       throw new Error('Not supported media type!');
  //   }
  // }

  // moreOrEqual(currMedia: MediaEnum, targetMedia: MediaEnum) {
  //   switch (targetMedia) {
  //     case MediaEnum.mobileSmall:
  //       return this.breakpoints.includes(currMedia);
  //     case MediaEnum.mobileLarge:
  //       return this.breakpoints.slice(1).includes(currMedia);
  //     case MediaEnum.tablet:
  //       return this.breakpoints.slice(2).includes(currMedia);
  //     case MediaEnum.desktop:
  //       return this.breakpoints.slice(3).includes(currMedia);
  //     case MediaEnum.tv:
  //       return this.breakpoints.slice(4).includes(currMedia);
  //     default:
  //       throw new Error('Not supported media type!');
  //   }
  // }
}
