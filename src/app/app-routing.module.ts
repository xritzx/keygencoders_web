import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from '../app/events/events.component';
import { AboutComponent } from '../app/about/about.component';
import { MembersComponent } from '../app/members/members.component';
import { ContactComponent } from '../app/contact/contact.component';



const routes: Routes = [
  { path: 'events', component: EventsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'members', component: MembersComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
