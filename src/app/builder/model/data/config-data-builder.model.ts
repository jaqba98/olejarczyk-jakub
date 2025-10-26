import { ConfigDomain } from '../../../domain/model/config-domain.model';

export interface ConfigDataBuilderModel extends ConfigDomain.Data {
  currentYear: number;
}
