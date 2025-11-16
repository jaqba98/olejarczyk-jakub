// import { personalRawConst } from '../../raw/builder/personal-raw.const';
// import { websiteRawConst } from '../../raw/builder/website-raw.builder';

export class FooterBuilderData {
  static buildCopyright(): string {
    // const { firstName, lastName } = personalRawConst;
    // const { creationYear } = websiteRawConst;
    const firstName = '';
    const lastName = '';
    const creationYear = 2025;
    const currYear = new Date().getFullYear();
    const year = creationYear === currYear ? `${currYear}` : `${creationYear} - ${currYear}`;
    return `© ${year} ${firstName} ${lastName}. All rights reserved.`;
  }
}
