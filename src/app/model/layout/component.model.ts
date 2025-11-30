import { ComponentKindType } from '../../type/kind/component-kind.type';
import { ParagraphDomainModel } from '../domain/paragraph-domain.model';
import { SectionDomainModel } from '../domain/section-domain.model';
import { TechnologyDomainModel } from '../domain/technology-domain.model';

interface BaseComponentModel<TKind extends ComponentKindType, TDomain> {
  kind: TKind;
  domain: TDomain;
}

interface ParagraphComponentModel extends BaseComponentModel<'paragraph', ParagraphDomainModel> {}

interface SectionComponentModel extends BaseComponentModel<'section', SectionDomainModel> {}

interface TechnologyComponentModel
  extends BaseComponentModel<'technology', TechnologyDomainModel> {}

export type ComponentModel =
  | ParagraphComponentModel
  | SectionComponentModel
  | TechnologyComponentModel;
