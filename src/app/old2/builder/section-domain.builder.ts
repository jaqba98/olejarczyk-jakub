// import { RecordModel } from '../model/domain.model';
// import { SectionKindDomainType } from '../../type/kind/section-kind.type';
// import {
//   booleanDomainBuilder,
//   numberDomainBuilder,
//   recordDomainBuilder,
//   stringDomainBuilder,
// } from './core-domain.builder';

// export const sectionDomainBuilder = (
//   kind: SectionKindDomainType,
//   routable: boolean,
//   order: number,
// ): RecordModel => {
//   return recordDomainBuilder({
//     data: recordDomainBuilder({
//       id: stringDomainBuilder(''),
//       label: stringDomainBuilder(''),
//       href: stringDomainBuilder(''),
//     }),
//     metadata: recordDomainBuilder({
//       kind: stringDomainBuilder(kind),
//       routable: booleanDomainBuilder(routable),
//       order: numberDomainBuilder(order),
//     }),
//   });
// };
