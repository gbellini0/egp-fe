import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadMoreComponent implements AfterViewInit {

    @Input() text: string | undefined;

    @Input() maxHeight!: number;

    @Input() from: string | undefined

    public isCollapsed: boolean = false;
    public isCollapsable: boolean = false;

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        let currentHeight = this.from === this.getUser() ? this.elementRef.nativeElement.getElementsByTagName('div')[0].scrollHeight : this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
        if (currentHeight > this.maxHeight) {
            this.isCollapsed = true;
            this.isCollapsable = true;
        }
    }

    getUser(){
      return 'Me'
    }
}