import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { SongDetailPageComponent } from './song-detail-page/song-detail-page.component';
import { HotSongsListComponent } from './hot-songs-list/hot-songs-list.component';

const routes: Routes = [    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'posts/:id', component: PostDetailComponent },
    { path: 'create-post', component: CreatePostComponent },
    { path: 'songs/:id', component: SongDetailPageComponent },
    { path: 'hot-songs', component: HotSongsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }