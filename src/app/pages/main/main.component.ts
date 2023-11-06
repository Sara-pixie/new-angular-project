import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { CatFactsService } from 'src/app/services/cat-facts.service';

@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: true,
    imports: [TitleComponent]
})
export class MainComponent implements OnInit {

  constructor(private catFactsService: CatFactsService) {}

  ngOnInit(): void {
    this.catFactsService.getCatFacts()
    .subscribe(response => {
      console.log(response);
    });
  }

}
