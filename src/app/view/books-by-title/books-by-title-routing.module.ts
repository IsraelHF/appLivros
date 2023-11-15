import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksByTitlePage } from './books-by-title.page';

const routes: Routes = [
  {
    path: '',
    component: BooksByTitlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksByTitlePageRoutingModule {}
