import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { MediaEnum, MediaService } from '@olejarczyk-jakub/system';
import { LogoComponent } from '../logo/logo.component';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'lib-nav',
  imports: [CommonModule, LogoComponent, HamburgerComponent, MenuComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit, OnDestroy {
  spaceAround = false;

  menuIsVisible = false;

  menuIsActive = false;

  private sub!: Subscription;

  constructor(private readonly media: MediaService) {}

  ngOnInit() {
    this.sub = this.media.media$.subscribe((media) => {
      this.spaceAround = this.media.moreOrEqual(media, MediaEnum.tablet);

      if (this.media.lessOrEqual(media, MediaEnum.mobileLarge)) {
        this.menuIsActive = true;
      } else {
        this.menuIsActive = false;
        this.menuIsVisible = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClick(event: boolean) {
    this.menuIsVisible = event;
  }
}
