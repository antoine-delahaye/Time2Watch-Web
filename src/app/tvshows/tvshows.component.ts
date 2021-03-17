import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})

export class TvshowsComponent implements OnInit {

  constructor() {
  }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
  }

}
