import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  constructor() {
  }

  @HostBinding('class.col-12') boolean = true;

  ngOnInit(): void {
  }

}
