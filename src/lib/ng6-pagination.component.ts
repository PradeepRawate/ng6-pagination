import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { PagerService } from './ng6-pagination.service';
import { STYLES } from './template';

@Component({
  selector: 'ng6-pagination',
  templateUrl: './ng6-pagination.component.html',
  styles: [ STYLES ]
})
export class Ng6PaginationComponent implements OnInit {

  @Input() allItems: any[];
  @Input() pageSize: number;
  @Input() range: number;
  @Input() showInfo: boolean;
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();

  pages: Observable<number[]>;
  currentPage: number;
  totalPages: number;

  constructor(private pagerService: PagerService) {
  }

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, this.pageSize, page, null);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.pageChange.emit(page);
  }

  getMorePages(offset: string) {
    this.pager = this.pagerService.getPager(this.allItems.length, this.pageSize, 0, offset);
    this.pageChange.emit(this.pager.startPage);
  }
}
