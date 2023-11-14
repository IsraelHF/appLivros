import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  BookType,
  BookfindService,
} from 'src/app/model/services/bookfind.service';

@Component({
  selector: 'app-books-by-title',
  templateUrl: './books-by-title.page.html',
  styleUrls: ['./books-by-title.page.scss'],
})
export class BooksByTitlePage implements OnInit {
  result!: Observable<any>;
  searchTitle: string = '';
  //category: BookCategory = BookCategory.all;
  category: string = '';
  bookType: BookType = BookType.fic;

  constructor(private bookService: BookfindService) {}

  ngOnInit() {}

  search() {
    this.result = this.bookService
      .searchByTitle(this.searchTitle, this.category)
      .pipe(map((results) => results['results']));
  }
}
