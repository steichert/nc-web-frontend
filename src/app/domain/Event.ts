import { Post } from "./Post";

export class Event extends Post {
    eventDate: string | null;
    imageUrl: string | null;
    registrationUrl: string | null;

    constructor() {
        super();
        this.eventDate = null;
        this.imageUrl = null;
        this.registrationUrl = null;
    }
}