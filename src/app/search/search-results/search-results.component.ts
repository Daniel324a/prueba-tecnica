import { Component } from '@angular/core';

import { SearchService } from '../services/search.service';

import { Post } from '../interfaces/search.interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
  get results(): Post[] {
    return this.searchService.results;
  }

  get isLoading(): boolean {
    return this.searchService.isLoading;
  }

  constructor(private searchService: SearchService) {}

  getAuthor(value: number): string {
    return this.searchService.authors.find(({ id }) => id === value)?.name!;
  }
}
