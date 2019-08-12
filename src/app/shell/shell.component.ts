import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  explorer = '# keygen@/~$';
  // Terminal UI State
  minimized = false;
  closed = false;
  // Command history
  count: Array<any> = [];
  commandsCount = 13; // Total no. of command visible to end user
  // Possible routes
  routes: Array<any> = this.routeList(this.router.config);


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

  // Command execution function that redirects to the possible route
  execute(data: any) {
    // console.log(data);
    data = data.toLowerCase();
    while (this.count.length > this.commandsCount) {
      this.count.shift();
    }
    // console.log(this.routes);
    this.count.push(data);
    if (this.routes.includes(data)) {
      this.router.navigate([`/${data}`]);
    } else {
      if (data.includes('help')) {
        this.count.push(`Get help already! Type any of these and navigate ${this.routes}`);
      }
      if (data.includes('fuck')) { this.count.push('KeyGEn CBash v1.0.0 doesn\'t approve your F-word ☹️');
      } else { this.count.push('Error : 404 ¯\\_(ツ)_/¯'); }
    }
  }

  // Terminal UI functionalities
  close() {
    this.closed = true;
    this.minimized = false;
  }
  minimize() {
    this.closed = false;
    this.minimized = true;
    this.commandsCount = 3;
    while (this.count.length > this.commandsCount) {
      this.count.shift();
    }
  }
  expand() {
    this.closed = false;
    this.minimized = false;
    this.commandsCount = 13;
  }

}
