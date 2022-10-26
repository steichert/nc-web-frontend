import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-content',
  templateUrl: './paragraph-content.component.html',
  styleUrls: ['./paragraph-content.component.scss']
})
export class ParagraphContentComponent implements OnInit {

    @Input('paragraph') paragraph: any;

    constructor() { }

    ngOnInit(): void {
    }

    isSimpleParagraph(type: string) {
        return type == 'SIMPLE';
    }

    isSimpleHtmlParagraph(type: string) {
        return type == 'SIMPLE_HTML'
    }

    isUnorderedList(type: string) {
        return type == 'UNORDERED_LIST';
    }

    isOrderedList(type: string) {
        return type == 'ORDERED_LIST';
    }

    hasNestedList(item: any) {
        return typeof item === 'object' || item instanceof Object;
    }    

}
