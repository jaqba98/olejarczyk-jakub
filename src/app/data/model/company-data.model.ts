import { CompanyIdDataType } from '../../type/id/company-id-data.type';
import { CityNameDataType } from '../../type/name/city-name-data.type';
import { CompanyNameDataType } from '../../type/name/company-name-data.type';
import { CountryNameDataType } from '../../type/name/country-name-data.type';
import { BaseDataModel } from './base-data.model';

interface CompanyModel extends BaseDataModel<CompanyIdDataType> {
  name: CompanyNameDataType;
  city: CityNameDataType;
  country: CountryNameDataType;
}

export type CompanyDataModel = Record<CompanyIdDataType, CompanyModel>;
