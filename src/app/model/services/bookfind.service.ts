import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum BookCategory {
  all = '',
  abp = 'Animals, Bugs & Pets',
  acm = 'Art, Creativity & Music',
  gl = 'General Literature',
  hpo = 'Hobbies, Sports & Outdoors',
  sff = 'Science Fiction & Fantasy',
  rf = ' Real Life',
  st = 'Science & Technology',
  ms = 'Mistery & Suspense',
  ref = 'Reference',
}

export enum BookType {
  all = '',
  fic = 'Fiction',
  nfic = 'Nonfiction',
}

@Injectable({
  providedIn: 'root',
})
export class BookfindService {
  private apiKey = '5064dab970mshc57337919b85a4ep158620jsnc8f569b5affd';
  private host = 'book-finder1.p.rapidapi.com';
  private baseUrl = 'https://book-finder1.p.rapidapi.com/api/search';

  constructor(private http: HttpClient) {}

  searchByTitle(title: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.host,
    });

    const url = `${this.baseUrl}?title=${encodeURI(title)}`;
    return this.http.get(url, { headers });
  }

  searchByAuthor(author: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.host,
    });

    const url = `${this.baseUrl}?author=${encodeURI(author)}`;
    return this.http.get(url, { headers });
  }

  searchByCategory(category: BookCategory): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.host,
    });

    const url = `${this.baseUrl}?category=${encodeURI(category)}`;
    return this.http.get(url, { headers });
  }
}
