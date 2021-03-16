import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() {
  }

  @HostBinding('class.col-12') boolean = true;

  ngOnInit(): void {
  }

}
