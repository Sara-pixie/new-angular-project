import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: true,
    imports: [TitleComponent]
})
export class MainComponent {

}
