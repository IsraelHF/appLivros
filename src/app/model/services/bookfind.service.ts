import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookfindService {
  private apiKey = '5064dab970mshc57337919b85a4ep158620jsnc8f569b5affd';
  private host = 'book-finder1.p.rapidapi.com';
  private baseUrl = 'https://book-finder1.p.rapidapi.com/api/search';

  constructor(private http: HttpClient) {}

  searchByTitle(
    title: string,
    category: string,
    results_per_page: number
  ): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.host,
    });

    const url = `${this.baseUrl}?title=${encodeURIComponent(
      title
    )}&categories=${encodeURIComponent(
      category
    )}&results_per_page=${results_per_page}`;

    return this.http.get(url, { headers });
  }

  searchByAuthor(
    author: string,
    category: string,
    results_per_page: number
  ): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.host,
    });

    const url = `${this.baseUrl}?author=${encodeURIComponent(
      author
    )}&categories=${encodeURIComponent(
      category
    )}&results_per_page=${results_per_page}`;
    return this.http.get(url, { headers });
  }

  searchByCategory(category: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.host,
    });

    const url = `${this.baseUrl}?categories=${encodeURIComponent(category)}`;
    return this.http.get(url, { headers });
  }
}
