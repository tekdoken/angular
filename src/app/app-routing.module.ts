import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DictionaryListComponent} from "./dictionary/dictionary-list/dictionary-list.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";

const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryListComponent,
  children:[{
    path:'word',
    component: DictionaryDetailComponent
  }]
}, {
  path: 'timelines',
  component: TimelinesComponent
}, {
  path: 'youtube',
  component: YoutubePlaylistComponent, children: [{
    path: ':id',
    component: YoutubePlayerComponent
  }]
}, {
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
// https://1fichier.com/?vdzp3s00luoohfni3oug
