import { Post } from "./Post";

export class Sermon extends Post {
    sermonSeries: string | null;
    sermonDate: string | null;
    sermonDateFormatted: string | null;
    speaker: string | null;

    constructor() {
        super();
        this.sermonSeries = null;
        this.sermonDate = null;
        this.sermonDateFormatted = null;
        this.speaker = null;
    }
}