import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./view/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'book-details',
    loadChildren: () => import('./view/book-details/book-details.module').then( m => m.BookDetailsPageModule)
  },  {
    path: 'books-by-title',
    loadChildren: () => import('./view/books-by-title/books-by-title.module').then( m => m.BooksByTitlePageModule)
  },
  {
    path: 'books-by-author',
    loadChildren: () => import('./view/books-by-author/books-by-author.module').then( m => m.BooksByAuthorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
