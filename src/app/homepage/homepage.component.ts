import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.config.forEach(element => {
      console.log(element)
    });
  }

}
