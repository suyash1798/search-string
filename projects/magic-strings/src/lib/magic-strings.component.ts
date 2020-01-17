import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nk-magic-strings',
  template: `
    <input type="text" (keydown.enter)="markText($event.target.value)">
    <div #content [hidden]="true">
      <ng-content>

      </ng-content>
    </div>
    <div [innerHTML]="controlledContent"></div>
  `,
  styles: [`.mark {
    background-color: yellow
  }`],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringsComponent implements OnInit {

  @ViewChild('content', null) content: ElementRef;
  originalContent: string;
  controlledContent: string;

  constructor() {
  }

  ngOnInit() {
    this.originalContent = this.controlledContent = this.content.nativeElement.textContent;
  }

  markText(value: any) {
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(new RegExp(value, 'g'), `<span class="mark">${value}</span>`);
  }
}
