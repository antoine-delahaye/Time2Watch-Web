import {Component, HostBinding} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
    translate.currentLang = 'fr';
  }

  title = 'Time2Watch';

  @HostBinding('class') class = 'd-flex flex-column min-vh-100';

}

export function DisplayTime(minutes: number): string {
  if (minutes < 60) {
    return minutes + 'min';
  }
  const hours = Math.floor(minutes / 60);
  return hours + 'h' + Math.floor(minutes - (hours * 60)) + 'min';
}

export function DisplayDate(date: string): string {
  const datePart = date.match(/\d+/g);
  return datePart[2] + '/' + datePart[1] + '/' + datePart[0];
}
