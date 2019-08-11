import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  routes: Array<String> = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.config.forEach(element => {
      console.log(element);
      this.routes.push(element.path);
    });
  }

}
