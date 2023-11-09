import { Component, OnInit, Input } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { CatFactsService } from 'src/app/services/cat-facts.service';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatCarouselComponent } from 'src/app/components/carousel/carousel/carousel.component';
import { MatCarouselSlideComponent } from 'src/app/components/carousel/carousel-slide/carousel-slide.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    standalone: true,
    imports: [CommonModule, TitleComponent, MatIconModule, TranslateModule, MatCarouselComponent, MatCarouselSlideComponent, MatButtonModule]
})
export class HomePageComponent implements OnInit {
  @Input({required: true}) pageTitle: string = '';
  slides: string[] = [];

  constructor(private catFactsService: CatFactsService) {}

  ngOnInit(): void {
    this.catFactsService.getCatFacts()
    .subscribe(response => {
      this.slides = response.data;
    });
  }

  getMoreFacts() {
    this.catFactsService.getCatFacts()
    .subscribe(response => {
      this.slides = response.data;
    });
  }
}
