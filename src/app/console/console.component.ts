import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  prompt = "# keygen@/~ $"
  constructor() { }

  ngOnInit() {
    var div = document.getElementById('console');
    setTimeout(function() {
      
        div.focus();
    }, 0);
  }

}
