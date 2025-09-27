export class CompanyAction {
  static readonly type = '[Company] Add item';
  constructor(readonly payload: string) {}
}
