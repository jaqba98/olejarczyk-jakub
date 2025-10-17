// import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { map } from 'rxjs/operators';

// import { ProjectState } from '../state/project/project.state';
// import { ProjectStateModel } from '../state/project/project-state.model';
// import { ProjectDomainType } from '../domain/type/project-domain.type';

// @Injectable()
// export class ProjectBuilder {
//   constructor(private readonly store: Store) {}

//   build() {
//     return this.store
//       .selectOnce(ProjectState.getState)
//       .pipe(map((state) => this.buildProject(state)));
//   }

//   private buildProject(state: ProjectStateModel) {
//     return Object.entries(state).map((array) => ({
//       projectType: array[0] as ProjectDomainType,
//       projectModel: array[1],
//     }));
//   }
// }
