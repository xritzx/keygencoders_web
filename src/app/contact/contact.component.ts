import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Observable<any[]>;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.contact = this.db.getContact().valueChanges();
  }
}
