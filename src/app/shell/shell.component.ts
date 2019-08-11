import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  explorer: String = '# keygen@/~$';
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
    // console.log(data);
    data = data.toLowerCase();
    if (this.count.length > 13) {
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

}
