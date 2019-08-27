import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mainMenuToggle } from 'src/app/animations/main-menu';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
  animations: [
    mainMenuToggle
  ]
})
export class VisitorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
