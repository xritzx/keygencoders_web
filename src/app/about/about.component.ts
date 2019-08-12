import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: Observable<any[]>;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.about = this.db.getAbout().valueChanges();
  }

}
