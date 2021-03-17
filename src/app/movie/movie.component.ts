import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  @HostBinding('class') class = 'my-auto col-12';

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params.id);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
