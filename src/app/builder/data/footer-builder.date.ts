import { personalBareConst } from '../../bare/const/personal-bare.const';
import { websiteBareConst } from '../../bare/const/website-bare.const';

export class FooterBuilderData {
  static buildCopyright(): string {
    const { firstName, lastName } = personalBareConst;
    const { creationYear } = websiteBareConst;
    const currYear = new Date().getFullYear();
    const year = creationYear === currYear ? `${currYear}` : `${creationYear} - ${currYear}`;
    return `© ${year} ${firstName} ${lastName}. All rights reserved.`;
  }
}
