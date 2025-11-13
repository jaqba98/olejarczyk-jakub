import { Injectable } from '@angular/core';

import { SectionMetadataModel } from '../model/section-metadata.model';

@Injectable({ providedIn: 'root' })
export class SectionMetadata {
  buildNav(): SectionMetadataModel {
    return {
      title: {
        visible: false,
      },
    };
  }

  buildHome(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildAboutMe(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildTechnology(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildSkill(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildExperience(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildResume(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildEducation(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildProject(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildContact(): SectionMetadataModel {
    return {
      title: {
        visible: true,
      },
    };
  }

  buildFooter(): SectionMetadataModel {
    return {
      title: {
        visible: false,
      },
    };
  }
}
