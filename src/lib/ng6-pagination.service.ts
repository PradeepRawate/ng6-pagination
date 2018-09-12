import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PagerService {
    pagerObj: any;
    pageRange = 6;
    getPager(totalItems: number, pageSize: number, currentPage: number, offset: string) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        let startPage: number, endPage: number;
        if (totalPages <= this.pageRange) {
            // less than 6 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            if (offset) {
                if (offset === 'NEXT') {
                    endPage = this.pagerObj.endPage + this.pageRange > totalPages ? totalPages :
                        (this.pagerObj.endPage + this.pageRange - 1);
                    startPage = endPage - (this.pageRange - 1);
                    currentPage = startPage;
                } else {
                    startPage = this.pagerObj.startPage - this.pageRange < 1 ? 1 :
                        (this.pagerObj.startPage - this.pageRange);
                    endPage = startPage + (this.pageRange - 1);
                    currentPage = startPage;
                }

            } else {
                // more than 6 total pages so calculate start and end pages
                if (currentPage <= (this.pageRange - 2)) {
                    startPage = 1;
                    endPage = this.pageRange;
                } else if (currentPage + 3 >= totalPages) {
                    startPage = totalPages - (this.pageRange - 1);
                    endPage = totalPages;
                } else {
                    startPage = currentPage - (this.pageRange / 2);
                    endPage = currentPage + ((this.pageRange / 2) - 1);
                }
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        pages.shift();  // Removes the first element from an array and returns only that element.
        pages.pop();

        this.pagerObj = {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };

        // return object with all pager properties required by the view
        return this.pagerObj;
    }
}
