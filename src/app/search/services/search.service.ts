import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post, Author } from '../interfaces/search.interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  public results: Post[] = [];

  private _authors: Author[] = [];
  private _isLoading: boolean = true;

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(newValue: boolean) {
    this._isLoading = newValue;
  }

  get authors(): Author[] {
    return this._authors;
  }

  constructor(private http: HttpClient) {
    this.initAuthors();
  }

  initAuthors() {
    return this.http
      .get<Author[]>(`https://jsonplaceholder.typicode.com/users`)
      .subscribe((resp) => {
        this._authors = resp;

        this._isLoading = false;
      });
  }

  searchPosts(value: string, author?: string): void {
    this._isLoading = true;

    // Fetch Api
    let url = `https://jsonplaceholder.typicode.com/${
      author ? 'user/' + author + '/' : ''
    }posts`;

    if (value) url += `?title=${value}`;

    this.http.get<Post[]>(url).subscribe((resp) => {
      this.results = resp.map(({ body, ...args }) => ({
        body:
          (body.charAt(0).toUpperCase() + body.slice(1)).substring(0, 155) +
          '...',
        ...args,
      }));

      this._isLoading = false;
    });
  }
}
