import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  BookType,
  BookfindService,
} from 'src/app/model/services/bookfind.service';

@Component({
  selector: 'app-books-by-author',
  templateUrl: './books-by-author.page.html',
  styleUrls: ['./books-by-author.page.scss'],
})
export class BooksByAuthorPage implements OnInit {
  result!: Observable<any>;
  searchAuthor: string = '';
  //category: BookCategory = BookCategory.all;
  category: string = '';
  bookType: BookType = BookType.fic;

  constructor(private bookService: BookfindService) {}

  ngOnInit() {}

  search() {
    this.result = this.bookService
      .searchByAuthor(this.searchAuthor, this.category)
      .pipe(map((results) => results['results']));
  }
}
