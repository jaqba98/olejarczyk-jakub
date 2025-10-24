import { CompanyIdDataType } from '../type/id/company-id-data.type';
import { CityNameDataType } from '../type/name/city-name-data.type';
import { CompanyNameDataType } from '../type/name/company-name-data.type';
import { CountryNameDataType } from '../type/name/country-name-data.type';

interface CompanyModel {
  id: CompanyIdDataType;
  name: CompanyNameDataType;
  city: CityNameDataType;
  country: CountryNameDataType;
  order: number;
}

export type CompanyDataModel = Record<CompanyIdDataType, CompanyModel>;
