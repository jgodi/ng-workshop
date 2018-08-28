import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../interfaces';

const url = 'https://api.angularbootcamp.com/videos';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  videos: Video[];
  selectedVideo: Video;

  constructor(http: HttpClient) {
    http
      .get<Video[]>(url)
      .subscribe(videos => this.videos = videos);
  }

  ngOnInit() {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
