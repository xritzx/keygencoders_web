import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Observable<any[]>;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.events = this.db.getEvents().valueChanges();
  }



}
