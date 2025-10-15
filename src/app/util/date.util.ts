import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateUtil {
  buildDate(startDate: Date, endDate: Date | null) {
    const startObject = this.buildDateObject(startDate);
    const startString = this.buildDateString(startObject.year, startObject.month, startObject.day);
    if (endDate) {
      const endObject = this.buildDateObject(endDate);
      const endString = this.buildDateString(endObject.year, endObject.month, endObject.day);
      return `${startString} • ${endString}`;
    }
    return `${startString} • Current`;
  }

  private buildDateObject(date: Date) {
    return {
      year: String(date.getUTCFullYear()),
      month: String(date.getUTCMonth() + 1).padStart(2, '0'),
      day: String(date.getUTCDay()).padStart(2, '0'),
    };
  }

  private buildDateString(year: string, month: string, day: string) {
    return `${year}-${month}-${day}`;
  }
}
