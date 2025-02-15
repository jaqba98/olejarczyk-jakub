import { Selector, State } from '@ngxs/store';
import { EducationsModel } from '@olejarczyk-jakub/model';

@State<EducationsModel>({
  name: 'educations',
  defaults: {
    educations: [
      {
        year: '2017 - 2021',
        header: 'Jan Kochanowski University of Kielce',
        course: 'Information technology',
        diploma: 'Engineering diploma',
      },
    ],
  },
})
export class EducationsState {
  @Selector()
  static getEducations(state: EducationsModel): EducationsModel['educations'] {
    return state.educations;
  }
}
