import { AuthGuard } from './../core/auth.guard';
import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailsComponent ,canActivate: [AuthGuard]},
  { path: 'dashboard', component: PostDashboardComponent ,canActivate: [AuthGuard]},
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers:[PostService],
  declarations: [PostDashboardComponent, PostDetailsComponent, PostListComponent]
})
export class PostsModule { }
