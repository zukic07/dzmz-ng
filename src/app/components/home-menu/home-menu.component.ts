import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
  
  links = [
    {
      icon: "calendar_today",
      label: "Termini",
      route: "/home/calendar",
      badge: true,
      disabled: false
    },
    {
      icon: "import_contacts",
      label: "Dove",
      route: "/home/calendar",
      badge: false,
      disabled: true
    },
    {
      icon: "schedule",
      label: "Vaktije",
      route: "/home/vaktije",
      badge: true,
      disabled: false
    },
    {
      icon: "local_library",
      label: "Hutbe",
      route: "/home/calendar",
      badge: true,
      disabled: true
    },
    {
      icon: "calendar_today",
      label: "free",
      route: "/home/calendar",
      badge: false,
      disabled: true
    },
    {
      icon: "home",
      label: "Kontakt",
      route: "/home/contact",
      badge: false,
      disabled: false
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
