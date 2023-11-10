import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBooksResponseItem } from '../books-page/books-response.model';
import { Router } from '@angular/router';
import { TitleComponent } from 'src/app/components/title/title.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss']
})
export class BookDetailPageComponent implements OnInit {
  @Input({required: true}) book!: SearchBooksResponseItem;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log("BOOK", this.book);
  }

  onBack() {
    this.router.navigate(['books']);
  }
}
