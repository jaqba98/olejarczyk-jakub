import { sectionMetadataConst } from '../const/section-metadata.const';
import { SectionMetadataModel } from '../model/section-metadata.model';

describe('Metadata: Section', () => {
  it('should return valid data', () => {
    const metadata: SectionMetadataModel = {
      nav: {
        routable: false,
        order: 0,
      },
      home: {
        routable: true,
        order: 1,
      },
      aboutMe: {
        routable: true,
        order: 2,
      },
      technology: {
        routable: true,
        order: 3,
      },
      skill: {
        routable: true,
        order: 4,
      },
      experience: {
        routable: true,
        order: 5,
      },
      resume: {
        routable: true,
        order: 6,
      },
      education: {
        routable: true,
        order: 7,
      },
      project: {
        routable: true,
        order: 8,
      },
      contact: {
        routable: true,
        order: 9,
      },
      footer: {
        routable: false,
        order: 10,
      },
    };
    expect(sectionMetadataConst).toEqual(metadata);
  });
});
