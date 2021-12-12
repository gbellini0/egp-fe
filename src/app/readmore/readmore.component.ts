import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadMoreComponent implements AfterViewInit {

    //message text
    @Input() text: string | undefined;

    //maximum height before collapse
    @Input() maxHeight!: number;

    //author of message
    @Input() from: string | undefined

    @ViewChild('otherMessage') otherMessage!: ElementRef ;
    @ViewChild('meMessage') meMessage!: ElementRef ;


    public isCollapsed: boolean = false;
    public isCollapsable: boolean = false;

    constructor() {
    }

    ngAfterViewInit() {
      let elementRef = null
      this.meMessage === undefined ? elementRef = this.otherMessage : elementRef = this.meMessage;
      let currentHeight = this.from === this.getUser() ? elementRef?.nativeElement.scrollHeight : elementRef?.nativeElement.offsetHeight;
      if (currentHeight > this.maxHeight) {
          this.isCollapsed = true;
          this.isCollapsable = true;
      }
    }

    getUser(){
      return 'Me'
    }
}
