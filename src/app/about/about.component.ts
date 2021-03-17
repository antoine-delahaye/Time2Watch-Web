import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() {
  }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
  }

}
