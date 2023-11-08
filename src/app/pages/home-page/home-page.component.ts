import { Component, OnInit, Input } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { CatFactsService } from 'src/app/services/cat-facts.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    standalone: true,
    imports: [TitleComponent, MatIconModule]
})
export class HomePageComponent implements OnInit {
  @Input({required: true}) pageTitle: string = '';

  constructor(private catFactsService: CatFactsService) {}

  ngOnInit(): void {
    this.catFactsService.getCatFacts()
    .subscribe(response => {
      console.log(response);
    });
  }

}
