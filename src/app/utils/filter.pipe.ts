import { Pipe, PipeTransform } from '@angular/core';
import { Page } from '../domain/Page';
import { Sermon } from '../domain/Sermon';
import { SermonsPageComponent } from '../pages/sermons-page/sermons-page.component';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {

    constructor(private sermonsPageComponent: SermonsPageComponent) {
    }

    transform(currentSermons: Sermon[], page: Page, searchText: string, searchType: string): any[] {
        return [];
        // if (!page) { 
        //     return [];
        // }

        // let pageNumber = page.pageNumber;
        // let pageSize = page.pageSize;
        // let archivedItems = page.archivedItems;

        // if (searchText == null || searchText == '') {
        //     let archivedPage = new Page(page.archivedItems, pageNumber, pageSize);
        //     archivedPage.archivedItems = archivedItems;
        //     archivedPage.setPage(pageNumber);

        //     this.sermonsPageComponent.setSermonsPage(archivedPage);
        //     return this.sermonsPageComponent.getSermonsPage().currentPageItems;
        // }

        // const lowerSearchText = searchText.toLowerCase();
        // let filteredItems = [];
        
        // for (let item of page.allItems) {
        //     if (searchType == 'Speaker') {
        //         if (item.speaker.toLowerCase().includes(lowerSearchText)) {
        //             filteredItems.push(item);
        //         }
        //     } else if (searchType == 'Date') {
        //         if (item.sermonDateFormatted.toLowerCase().includes(lowerSearchText)) {
        //             filteredItems.push(item);
        //         }
        //     } else if (searchType == 'Series') {
        //         if (item.sermonSeries.toLowerCase().includes(lowerSearchText)) {
        //             filteredItems.push(item);
        //         }
        //     } else {
        //         if (item.postTitle.toLowerCase().includes(lowerSearchText)) {
        //             filteredItems.push(item);
        //         }
        //     }
        // }

        // let filteredPage = new Page(filteredItems, pageNumber, pageSize);
        // filteredPage.archivedItems = archivedItems;
        // filteredPage.setPage(pageNumber);

        // this.sermonsPageComponent.setSermonsPage(filteredPage);

        // return this.sermonsPageComponent.getSermonsPage().currentPageItems;
    }
}