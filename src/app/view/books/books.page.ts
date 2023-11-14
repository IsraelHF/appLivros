import { Component, OnInit } from '@angular/core';
import { Observable , map} from 'rxjs';
import { BookType, BookfindService } from 'src/app/model/services/bookfind.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  result!: Observable<any>;
  searchTitle: string = '';
  //category: BookCategory = BookCategory.all;
  category: string = '';
  bookType : BookType = BookType.fic;

  constructor(private bookService : BookfindService) {}

  ngOnInit() {}

  search(){
    this.result = this.bookService.searchByTitle(this.searchTitle, this.category).pipe(map((results) =>  results['results']));
  }
}
