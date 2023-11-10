import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBooksResponseItem } from 'src/app/pages/books-page/books-response.model';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatChipsModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input({required: true}) book!: SearchBooksResponseItem;
  @Output() cardClick: EventEmitter<SearchBooksResponseItem> = new EventEmitter();

  onCardClick() {
    this.cardClick.emit(this.book);
  }
}
