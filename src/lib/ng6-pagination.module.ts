import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng6PaginationComponent } from './ng6-pagination.component';
import { PaginationPipe } from './ng6-pagination.pipe';
import { PagerService } from './ng6-pagination.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    Ng6PaginationComponent,
    PaginationPipe ],
  providers: [PagerService],
  exports: [ Ng6PaginationComponent, PaginationPipe]
})
export class Ng6PaginationModule { }
