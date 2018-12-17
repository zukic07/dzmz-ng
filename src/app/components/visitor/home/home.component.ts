import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  links = [
    {
      icon: "calendar_today",
      label: "Termini"
    },
    {
      icon: "import_contacts",
      label: "Dove"
    },
    {
      icon: "schedule",
      label: "Vaktije",
      route: "/home/vaktije"
    },
    {
      icon: "local_library",
      label: "Hutbe"
    },
    {
      icon: "calendar_today",
      label: "free"
    },
    {
      icon: "home",
      label: "Kontakt"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
