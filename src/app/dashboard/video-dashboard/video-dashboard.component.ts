import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../interfaces';
import { VideoLoaderService } from '../video-loader.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  videos: Observable<Video[]>;
  selectedVideo: Video;

  constructor(svc: VideoLoaderService) {
    this.videos = svc.loadVideos();
  }

  ngOnInit() {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
