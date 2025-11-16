import { Injectable } from '@angular/core';
import { PersonalRawModel } from '../model/personal-raw.model';

@Injectable({ providedIn: 'root' })
export class PersonalRawBuilder {
  build(): PersonalRawModel {
    return {
      firstName: 'Jakub',
      lastName: 'Olejarczyk',
    };
  }
}
