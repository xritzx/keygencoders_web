import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public db: AngularFireDatabase) { }

  getEvents() {
    return this.db.list('/events');
  }
  getMembers() {
    return this.db.list('/members');
  }

  getAbout() {
    return this.db.list('/about');
  }

  getContact() {
    return this.db.list('/contact');
  }
}
