import { PersonalDomain } from '../../../domain/model/domain/personal-domain.model';
import { BaseBuilderModel } from '../base/base-builder.model';

export type PersonalBuilderModel = BaseBuilderModel<
  PersonalDomain.Data,
  PersonalDomain.Metadata,
  {
    initials: string;
  }
>;
