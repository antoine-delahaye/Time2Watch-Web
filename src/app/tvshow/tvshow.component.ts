import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})

export class TvshowComponent implements OnInit, OnDestroy {

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
