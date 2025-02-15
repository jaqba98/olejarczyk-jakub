import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DownloadService {
  constructor(private readonly http: HttpClient) {}

  asset(file: string) {
    this.http.get(file, { responseType: 'blob' }).subscribe((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = file;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }
}
