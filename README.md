# Pagination for Angular 6

Simple Pagination for Angular with Informative track of results as you switch between pages. 

## Demo

Check out the live demo here: https://github.com/michaelbromley/ngx-pagination/blob/master/README.md

## Quick Start

```
npm install ng6-pagination --save
```

## Usage

```TypeScript
// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng6PaginationModule} from 'ng6-pagination'; // <-- import the module
import {MyComponent} from './my.component';

@NgModule({
    imports: [BrowserModule, Ng6PaginationModule], // <-- include it in your app module
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}
```

```TypeScript
// my.component.ts
import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
    <ul>
      <li *ngFor="let emp of employees | paginate : itemsPerPage : currentPage;"> ... </li>
    </ul>
               
    <ng6-pagination [allItems]="employees" [pageSize]="itemsPerPage" (pageChange)="currentPage = $event" itemsPerPage></ng6-pagination>
    `
})
export class MyComponent {
    p: number = 1;
    collection: any[] = someArrayOfThings;  
}
```

### PaginatePipe

The PaginatePipe should be placed at the end of an NgFor expression. Following are available config options:

```HTML
<li *ngFor="let emp of employees | paginate : itemsPerPage : currentPage;"> ... </li>

```
* **`itemsPerPage`** [`number`] - **required** : The number of items to display on each page.
* **`currentPage`** [`number`] - **required** : The current (active) page number.

### Ng6-Pagination Component (Pagination Controls)

This is Component for displaying pagination controls. It should be placed basically below your NgFor block. Following are available config options:

```HTML
<ng6-pagination [allItems]="employees" [pageSize]="itemsPerPage" (pageChange)="currentPage = $event" [showInfo]="true"></ng6-pagination>

```

* **`allItems`** [`Array<T>`] - **required** : Array of type Iterable which you want to paginate.
* **`pageSize`** [`number`] - **required** : The number of items to display on each page. (you can pass above used variable `itemsPerPage`)
* **`pageChange`** [`event handler`] - **required** : The expression specified will be invoked whenever the page changes via a click on one of the
pagination controls. The `$event` argument will be the number of the new page. It is used to update the value of
the `currentPage` variable which was passed to the `paginate` Pipe.
* **`showInfo`** [`boolean`] - **optional** : Show or Hide Information of displaying which items of total items on page.

## License

MIT
