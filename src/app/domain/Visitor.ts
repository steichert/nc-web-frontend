import { Child } from "./Child";

export class Visitor {
        title: string | null;
        firstName: string | null;
        surname: string | null;
        spouseName: string | null;
        children: Child[];
        contactNumber: string | null;
        email: string | null;
        moreInfoAreas: string[];
        otherArea: string | null;

    constructor() {
        this.title = null;
        this.firstName = null;
        this.surname = null;
        this.spouseName = null;
        this.children = [];
        this.contactNumber = null;
        this.email = null;
        this.moreInfoAreas = [];
        this.otherArea = null;
    }
}