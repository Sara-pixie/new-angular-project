import { TranslateModule } from '@ngx-translate/core';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    standalone: true,
    imports: [TranslateModule, NgClass]
})
export class TitleComponent implements AfterViewInit {
  @ViewChild('titleElementRef') titleElementRef!: ElementRef;
  @Input({ required: true }) title: string = '';
  @Input() removeUnderline: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.titleElementRef) return;
      this.titleElementRef.nativeElement.classList.add('fill');
    }, 1500);
  }

}
