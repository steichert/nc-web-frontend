export class Post {
    id: number | null;
    postTitle: string | null;
    postStatus: string | null;
    postDescription: string | null;
    postContent: string | null;
    postDate: Date | null;
    guid: string | null;
    attachmentMetaData: string | null;

    constructor() {
        this.id = null;
        this.postTitle = null;
        this.postStatus = null;
        this.postDescription = null;
        this.postContent = null;
        this.postDate = null;
        this.guid = null;
        this.attachmentMetaData = null;
    }
}

