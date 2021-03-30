import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import {HomeComponent} from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {ChangelogComponent} from './changelog/changelog.component';
import {PhotographyComponent} from './photography/photography.component';
import {CameraComponent} from './camera/camera.component';
import {LinkShortenerComponent} from './link-shortener/link-shortener.component';
import {LinkShortenerNewComponent} from './link-shortener-new/link-shortener-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'camera/:id', component: CameraComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 's/:id', component: LinkShortenerComponent },
  { path: 's', component: LinkShortenerNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
