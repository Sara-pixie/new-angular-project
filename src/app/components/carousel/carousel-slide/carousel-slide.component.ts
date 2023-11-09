import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ListKeyManagerOption } from '@angular/cdk/a11y';
import { MatCarouselSlide } from './carousel-slide.model';

@Component({
  selector: 'mat-carousel-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss']
})
export class MatCarouselSlideComponent implements OnInit, ListKeyManagerOption, MatCarouselSlide {
  @Input() public image?: SafeStyle;
  @Input() public overlayColor = '#00000040';
  @Input() public hideOverlay = false;
  @Input() public ariaLabel = '';
  @Input() public disabled = false; // implements ListKeyManagerOption
  @Input() public load = false;

  @ViewChild(TemplateRef) public templateRef!: TemplateRef<any>;

  constructor(public sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    if (this.image) {
      this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
    }
  }
}
