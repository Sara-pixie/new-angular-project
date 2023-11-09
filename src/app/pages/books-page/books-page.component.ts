import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from 'src/app/components/title/title.component';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent {
  @Input({required: true}) pageTitle: string = '';

}
