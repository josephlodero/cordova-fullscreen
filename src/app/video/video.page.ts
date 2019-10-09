import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onPlayerReady($event){
    
  }

}
