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
      route: "/home/calendar"
    },
    {
      icon: "import_contacts",
      label: "Dove",
      route: "/home/calendar"
    },
    {
      icon: "schedule",
      label: "Vaktije",
      route: "/home/vaktije"
    },
    {
      icon: "local_library",
      label: "Hutbe",
      route: "/home/calendar"
    },
    {
      icon: "calendar_today",
      label: "free",
      route: "/home/calendar"
    },
    {
      icon: "home",
      label: "Kontakt",
      route: "/home/calendar"
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
