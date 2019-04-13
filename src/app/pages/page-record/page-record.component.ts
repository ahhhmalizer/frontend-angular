import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-record',
  templateUrl: './page-record.component.html',
  styleUrls: ['./page-record.component.scss']
})
export class PageRecordComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    navigator.getUserMedia =
      navigator.getUserMedia || (navigator as any).webkitGetUserMedia || (navigator as any).mozGetUserMedia || null;
    // we need to pass the stream properties to the getUserMedia function.
    let video_audio_properties: any = { video: true, audio: true };

    // we can also set webcam resolution and framerate in the above object.
    // mandatory properties must be satisfied by the getuserMedia otherwise thrown an error.
    // optional properties will be satisfied if possible. Error will not be through if not satisfied.
    video_audio_properties = {
      video: { mandatory: { minWidth: 300, minHeight: 300, minFrameRate: 30 }, optional: [{ minFrameRate: 60 }] },
      audio: true
    };

    if (navigator.getUserMedia != null) {
      navigator.getUserMedia(video_audio_properties, onSuccess, onError);
    } else {
      alert('microphone and webcam API not supported');
    }
  }
}

function onSuccess(stream) {
  (document.getElementById('video') as any).srcObject = stream;

  // property of video tag.
  (document.getElementById('video') as any).play();
}

function onError(error) {
  console.log('Video capture error: ', error.code);
}
