import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input()
  videos: Video[];

  selectedVideo: Video;

  constructor() {}

  ngOnInit() {}

  setActiveVideo(video: Video) {
    this.selectedVideo = video;
  }
}
