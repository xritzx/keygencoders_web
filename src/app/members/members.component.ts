import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members: Observable<any[]>;
  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.members = this.db.getMembers().valueChanges();
  }

}
