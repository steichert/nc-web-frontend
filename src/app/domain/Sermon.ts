import { Post } from "./Post";

export class Sermon extends Post {
    sermonTitle: string | null;
    sermonDescription: string | null;
    sermonSpeaker: string | null;
    sermonAudioUrl: string | null;
    sermonSeoUrl: string | null;
    sermonSeriesId: number | null;
    sermonSeriesTitle: string | null;
    sermonDate: Date | null;
    creationDate: Date | null;

    constructor() {
        super();
        this.sermonTitle = null;
        this.sermonDescription = null;
        this.sermonSpeaker = null;
        this.sermonAudioUrl = null;
        this.sermonSeoUrl = null;
        this.sermonSeriesId = null;
        this.sermonSeriesTitle = null;
        this.sermonDate = null;
        this.creationDate = null;
    }
}