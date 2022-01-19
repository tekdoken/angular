import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DictionaryListComponent} from "./dictionary/dictionary-list/dictionary-list.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";
import {ProductUpdateComponent} from "./product/product-update/product-update.component";
import {HouseListComponent} from "./house/house-list/house-list.component";
import {HouseUpdateComponent} from "./house/house-update/house-update.component";
import {HouseCreateComponent} from "./house/house-create/house-create.component";

const routes: Routes = [{
  path: 'dictionary',
  component: DictionaryListComponent,
  children: [{
    path: 'word',
    component: DictionaryDetailComponent
  }]
}, {
  path: 'timelines',
  component: TimelinesComponent
}, {
  path: 'house',
  component: HouseListComponent
}, {
  path: 'housecreate',
  component: HouseCreateComponent
},
  {
  path: 'updatehouse/:id',
  component: HouseUpdateComponent
}, {
  path: 'youtube',
  component: YoutubePlaylistComponent, children: [{
    path: ':id',
    component: YoutubePlayerComponent
  }]
}, {
  path: 'product/list',
  component: ProductListComponent
},
  {
    path: 'product/update',
    children: [{
      path: ':id',
      component: ProductUpdateComponent
    }]
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
