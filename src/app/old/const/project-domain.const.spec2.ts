// import { BaseCompose } from '../../data/model/base/base-combo-data.model';
// import { ProjectDomain } from '../model/domain/project-domain.model';
// import { ProjectKindDomainType } from '../type/kind/project-kind-domain.type';
// import { projectDomainConst } from './project-domain.const';

// describe('Project Domain Const', () => {
//   it('Should return the correct data', () => {
//     const correctData: BaseCompose.Type<
//       ProjectKindDomainType,
//       ProjectDomain.Data,
//       ProjectDomain.Metadata
//     > = {
//       project1: {
//         data: {
//           banner: 'asset/image/personal/project1.jpeg',
//           name: 'Project 1',
//           creationDate: new Date(2025, 1, 1),
//           status: 'inProgress',
//           description: 'Project 1 lorem ipsum',
//           repository: {
//             type: 'github',
//             url: 'https://github.com/username/project1',
//           },
//           application: {
//             type: 'githubPage',
//             url: 'https://username.github.io/project1',
//           },
//           gallery: [
//             'asset/image/personal/project1_screen1.jpeg',
//             'asset/image/personal/project1_screen2.jpeg',
//             'asset/image/personal/project1_screen3.jpeg',
//           ],
//         },
//         metadata: {
//           test: 'test',
//           kind: 'project1',
//           technologyIds: ['html', 'css', 'javascript'],
//           order: 0,
//         },
//       },
//       project2: {
//         data: {
//           banner: 'asset/image/personal/project2.jpeg',
//           name: 'Project 2',
//           creationDate: new Date(2024, 1, 1),
//           status: 'completed',
//           description: 'Project 2 lorem ipsum',
//           repository: {
//             type: 'github',
//             url: 'https://github.com/username/project2',
//           },
//           application: {
//             type: 'none',
//           },
//           gallery: [
//             'asset/image/personal/project2_screen1.jpeg',
//             'asset/image/personal/project2_screen2.jpeg',
//             'asset/image/personal/project2_screen3.jpeg',
//           ],
//         },
//         metadata: {
//           test: 'test',
//           kind: 'project2',
//           technologyIds: ['git', 'github', 'gitlab'],
//           order: 1,
//         },
//       },
//     };
//     expect(projectDomainConst).toEqual(correctData);
//   });
// });
