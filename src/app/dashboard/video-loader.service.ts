import { Injectable } from '@angular/core';
import { Video } from './interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const url = 'https://api.angularbootcamp.com/videos';

@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(url)
    .pipe(
      map(videos => [videos[0]])
    );
  }
}
