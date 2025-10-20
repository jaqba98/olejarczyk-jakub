import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ObjectUtil {
  convertObjectToArray<TKey extends string, TValue>(obj: Record<TKey, TValue>) {
    return Object.entries(obj).map((array) => ({
      key: array[0] as TKey,
      value: array[1] as TValue,
    }));
  }
}
