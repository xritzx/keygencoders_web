import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  explorer: String = '# keygen@/~ $';
  count: Array<any> = [];
  routes: Array<any> = this.routeList(this.router.config);
  commandsCount: Number = 13; // Total no. of command visible to end user

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Exporting possible routes
  routeList(routes: Route[]) {
    const routeList = [];
    routes.forEach(element => {
     routeList.push(element.path);
    });
    return routeList;
  }

  execute(data: any) {
    console.log(data);
    if (this.count.length > 13) {
      this.count.shift();
    }
    console.log(this.routes);
    this.count.push(data);
    if (this.routes.includes(data)) {
      console.log('Fetching....');
    }
  }

}
