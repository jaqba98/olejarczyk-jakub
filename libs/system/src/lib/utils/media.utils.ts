import { MediaEnum } from '@olejarczyk-jakub/model';

const breakpoints: MediaEnum[] = [
  MediaEnum.mobileSmall,
  MediaEnum.mobileLarge,
  MediaEnum.tablet,
  MediaEnum.desktop,
  MediaEnum.tv,
];

export const mediaLessOrEqual = (
  currMedia: MediaEnum,
  targetMedia: MediaEnum
) => {
  switch (targetMedia) {
    case MediaEnum.mobileSmall:
      return breakpoints.slice(0, 1).includes(currMedia);
    case MediaEnum.mobileLarge:
      return breakpoints.slice(0, 2).includes(currMedia);
    case MediaEnum.tablet:
      return breakpoints.slice(0, 3).includes(currMedia);
    case MediaEnum.desktop:
      return breakpoints.slice(0, 4).includes(currMedia);
    case MediaEnum.tv:
      return breakpoints.slice(0, 5).includes(currMedia);
    default:
      throw new Error('Not supported media type!');
  }
};

export const mediaMore = (currMedia: MediaEnum, targetMedia: MediaEnum) => {
  switch (targetMedia) {
    case MediaEnum.mobileSmall:
      return breakpoints.slice(1).includes(currMedia);
    case MediaEnum.mobileLarge:
      return breakpoints.slice(2).includes(currMedia);
    case MediaEnum.tablet:
      return breakpoints.slice(3).includes(currMedia);
    case MediaEnum.desktop:
      return breakpoints.slice(4).includes(currMedia);
    case MediaEnum.tv:
      return breakpoints.slice(5).includes(currMedia);
    default:
      throw new Error('Not supported media type!');
  }
};

export const mediaMoreOrEqual = (
  currMedia: MediaEnum,
  targetMedia: MediaEnum
) => {
  switch (targetMedia) {
    case MediaEnum.mobileSmall:
      return breakpoints.includes(currMedia);
    case MediaEnum.mobileLarge:
      return breakpoints.slice(1).includes(currMedia);
    case MediaEnum.tablet:
      return breakpoints.slice(2).includes(currMedia);
    case MediaEnum.desktop:
      return breakpoints.slice(3).includes(currMedia);
    case MediaEnum.tv:
      return breakpoints.slice(4).includes(currMedia);
    default:
      throw new Error('Not supported media type!');
  }
};
