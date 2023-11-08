import { Component, OnInit } from '@angular/core';
import { Observable , map} from 'rxjs';
import { BookCategory, BookType, BookfindService } from 'src/app/model/services/bookfind.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  result!: Observable<any>;
  searchTitle: string = '';
  searchAuthor: string = '';
  lexileMin : number = 600;
  lexileMax :number = 800;
  page : number = 1;
  category: BookCategory = BookCategory.all;
  bookType : BookType = BookType.fic;

  constructor(private bookService : BookfindService) {}

  ngOnInit() {}

  search(){
    this.result = this.bookService.searchBooks(this.searchTitle, this.searchAuthor, this.bookType, this.category, this.lexileMin, this.lexileMax, this.page).pipe(map((results) =>  results['results']));
  }
}
