import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';

import { SearchService } from './services/search.service';

@NgModule({
  declarations: [SearchBarComponent, SearchResultsComponent],
  imports: [CommonModule],
  exports: [SearchBarComponent, SearchResultsComponent],
  providers: [SearchService],
})
export class SearchModule {}
