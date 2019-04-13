import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-page-choose-audience',
  templateUrl: './page-choose-audience.component.html',
  styleUrls: ['./page-choose-audience.component.scss']
})
export class PageChooseAudienceComponent implements OnInit {

  @HostBinding('class') classes = 'CenteredPage';

  constructor() { }

  ngOnInit() {
  }

}
