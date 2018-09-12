import { Pipe, PipeTransform, EventEmitter } from '@angular/core';
import { PagerService } from './ng6-pagination.service';

@Pipe({
    name: 'paginate',
    pure: true
})

export class PaginationPipe implements PipeTransform {

    constructor(private pagerService: PagerService) {}
    transform(allItems: any[], itemPerPage: number, currentPage: any): any[] {
        const pager = this.pagerService.getPager(allItems.length, itemPerPage, currentPage, null);

        // get current page of items
        return  allItems.slice( pager.startIndex, pager.endIndex + 1);
    }
}
