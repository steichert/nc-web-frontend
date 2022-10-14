export class Page {
    allItems: any[];
    archivedItems: any[];
    currentPageItems: any[];
    lastIndex: number;
    totalNumberOfItems: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    pagesList: string[];

    constructor(allItems: any, pageNumber: number, pageSize: number) {
        this.allItems = allItems;
        this.archivedItems = [];
        this.currentPageItems = [];
        this.lastIndex = -1;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;

        this.totalNumberOfItems = allItems.length;
        this.totalPages = Math.ceil(this.totalNumberOfItems / this.pageSize);

        this.pagesList = [];
        for (let i = 1 ; i <= this.totalPages ; i++) {
            this.pagesList.push(i.toString());
        }
    }

    setPage(pageNumber: number) {
        this.pageNumber = pageNumber;
        this.currentPageItems = [];

        let startIndex = (pageNumber * this.pageSize) - this.pageSize;
        let endIndex = startIndex + this.pageSize;

        for (let i = startIndex ; i < endIndex && i < this.totalNumberOfItems ; i++) {
            this.currentPageItems.push(this.allItems[i]);
        }
    }

    nextPage() {
        this.setPage(++this.pageNumber);
    }

    previousPage() {
        this.setPage(--this.pageNumber);
    }

    hasNextPage() {
        return this.pageNumber < this.totalPages;
    }

    hasPreviousPage() {
        return this.pageNumber > 1;
    }
}