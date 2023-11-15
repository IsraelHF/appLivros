import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookfindService } from 'src/app/model/services/bookfind.service';

@Component({
  selector: 'app-books-by-title',
  templateUrl: './books-by-title.page.html',
  styleUrls: ['./books-by-title.page.scss'],
})
export class BooksByTitlePage implements OnInit {
  result!: Observable<any>;
  searchTitle: string = '';
  category: string = '';
  results_per_page: number = 50;

  constructor(private bookService: BookfindService) {}

  ngOnInit() {}

  search() {
    if (!this.searchTitle) {
      this.result = this.bookService
        .searchByCategory(this.category)
        .pipe(map((results) => results['results']));
    } else {
      this.result = this.bookService
        .searchByTitle(this.searchTitle, this.category, this.results_per_page)
        .pipe(map((results) => results['results']));
    }
  }
}
