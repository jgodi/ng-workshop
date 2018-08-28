import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input()
  videos: Video[];

  @Output()
  onVideoSelected = new EventEmitter<Video>();

  selectedVideo: Video;

  constructor() {}

  ngOnInit() {}

  setActiveVideo(video: Video) {
    this.onVideoSelected.emit(video);
    this.selectedVideo = video;
  }
}
