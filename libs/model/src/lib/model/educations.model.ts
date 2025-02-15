export interface EducationModel {
  year: string;
  header: string;
  course: string;
  diploma: string;
}

export interface EducationsModel {
  educations: EducationModel[];
}
