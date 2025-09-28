import { CompanyStateEnum } from '../../enum/state/company-state.enum';
import { CompanyDomainModel } from '../domain/company-domain.model';

export type CompanyStateModel = Record<CompanyStateEnum, CompanyDomainModel>;
