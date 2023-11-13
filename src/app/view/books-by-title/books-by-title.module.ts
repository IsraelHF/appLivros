import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksByTitlePageRoutingModule } from './books-by-title-routing.module';

import { BooksByTitlePage } from './books-by-title.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksByTitlePageRoutingModule
  ],
  declarations: [BooksByTitlePage]
})
export class BooksByTitlePageModule {}
