import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface ContactModel {
  icon: IconDefinition;
  header: string;
  label: string;
  link: string;
}

export interface ContactsModel {
  contacts: ContactModel[];
}
