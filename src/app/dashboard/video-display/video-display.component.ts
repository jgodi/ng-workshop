import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.scss'],
})
export class VideoDisplayComponent implements OnInit {
  @Input()
  video: Video;
  
  constructor() {}

  ngOnInit() {}
}
