import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';

import { File } from '../models/file.model';
import { checkTime } from '../interceptors/time-http.interceptor';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';
  constructor(
    private http: HttpClient
  ) { }

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap( content => {
        const blob = new Blob([content], {type});
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  uploadFile(file: Blob){
    const dto = new FormData();
    dto.append('file', file)
    return this.http.post<File>(`${this.apiUrl}/files/upload`, dto, {context: checkTime()});
  }
}
