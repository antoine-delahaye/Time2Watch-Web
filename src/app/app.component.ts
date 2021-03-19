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

export function DisplayTime(totalMinutes: number): string {
  if (totalMinutes < 60) {
    return totalMinutes + 'min';
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes - (hours * 60));
  return hours + 'h' + minutes + 'min';

}
