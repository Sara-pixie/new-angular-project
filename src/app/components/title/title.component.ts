import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements AfterViewInit {
  @ViewChild('titleElementRef') titleElementRef!: ElementRef;
  @Input({ required: true }) title!: string;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.titleElementRef) return;
      this.titleElementRef.nativeElement.classList.add('fill');
    }, 1500);
  }

}
