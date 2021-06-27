import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  title: string = 'angular';
  showAddTask: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }
  toggleAddTask():void {
    this.uiService.toggleAddTask()
  }
  hasRoute(rout: string) {
    return this.router.url === rout;
  }
}


