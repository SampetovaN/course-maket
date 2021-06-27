import {Component, OnInit} from '@angular/core';

import {Router, NavigationEnd, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  currentRoute: boolean;
  routeAbout: string = '/about'

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if (event instanceof RouterEvent) {
          this.currentRoute = event.url === this.routeAbout;
        }
      });

  }
}
