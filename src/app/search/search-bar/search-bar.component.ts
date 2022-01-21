import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Author } from '../interfaces/search.interfaces';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @ViewChild('inputSearch') input?: ElementRef<HTMLInputElement>;
  @ViewChild('selectAuthor') select?: ElementRef<HTMLSelectElement>;

  get authors(): Author[] {
    return this.searchService.authors;
  }

  get isLoading(): boolean {
    return this.searchService.isLoading;
  }

  constructor(private searchService: SearchService) {}

  search() {
    const author = this.select?.nativeElement.value;
    const element = this.input!.nativeElement;
    const value = '' + element.value;
    element.value = '';

    this.searchService.searchPosts(value, author);
  }
}
