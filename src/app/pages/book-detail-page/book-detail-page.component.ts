import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBooksResponseItem } from '../books-page/books-response.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss']
})
export class BookDetailPageComponent implements OnInit{
  @Input({required: true}) book!: SearchBooksResponseItem;

  ngOnInit(): void {
    console.log("BOOK", this.book);
  }
}
