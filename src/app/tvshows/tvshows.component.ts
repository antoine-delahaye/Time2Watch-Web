import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})

export class TvshowsComponent implements OnInit {

  constructor() {
  }

  @HostBinding('class.col-12') boolean = true;

  ngOnInit(): void {
  }

}
