import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from 'src/app/components/title/title.component';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit{
  @Input({required: true}) pageTitle: string = '';

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooksByTitle('harry potter').subscribe(result => {
      console.log(result);
    });
  }
}
