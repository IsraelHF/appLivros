import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookfindService } from 'src/app/model/services/bookfind.service';

@Component({
  selector: 'app-books-by-author',
  templateUrl: './books-by-author.page.html',
  styleUrls: ['./books-by-author.page.scss'],
})
export class BooksByAuthorPage implements OnInit {
  result!: Observable<any>;
  searchAuthor: string = '';
  category: string = '';
  results_per_page: number = 50;

  constructor(private bookService: BookfindService) {}

  ngOnInit() {}

  search() {
    if (!this.searchAuthor) {
      this.result = this.bookService
        .searchByCategory(this.category)
        .pipe(map((results) => results['results']));
    } else {
      this.result = this.bookService
        .searchByAuthor(this.searchAuthor, this.category, this.results_per_page)
        .pipe(map((results) => results['results']));
    }
  }
}
