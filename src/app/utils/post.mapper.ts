import { Event } from 'src/app/domain/Event';
import { Sermon } from '../domain/Sermon';
import { DateUtils } from './date.utils';

export class PostMapper {
    static mapToSermons(responseData: any) {
        let sermons: Sermon[] = [];

        for (let data of responseData) {
            let sermon: Sermon = new Sermon();

            sermon.id = data.id;
            sermon.postTitle = data.postTitle;
            sermon.postContent = data.postContent;
            sermon.postStatus = data.postStatus;
            sermon.postDescription = data.postExcerpt;
            sermon.guid = data.guid;

            let postMetaItems = data.postMeta;

            for (let postMetaItem of postMetaItems) {
                if (postMetaItem.metaKey == 'be_file_created') {
                    sermon.sermonDate = postMetaItem.metaValue;
                } else if (postMetaItem.metaKey == '_wp_attachment_metadata') {
                    sermon.attachmentMetaData = postMetaItem.metaValue;
                }
            }

            sermon.speaker = this.getMetaValue(sermon, 'artist');
            sermon.sermonSeries = this.getMetaValue(sermon, 'album');

            if (sermon.sermonDate != null) {
                sermon.sermonDateFormatted = DateUtils.formatDateWithMonthName(sermon.sermonDate);
            }

            this.sanitizePostDescription(sermon);
            if (sermon.postDescription != null) {
                sermon.postDescription = sermon.postDescription.replace(/&amp;/, '&');
            }

            sermons.push(sermon);
        }

        return sermons;
    }

    static mapToEvents(responseData: any) {
        let events: Event[] = [];

        for (let data of responseData) {
            let event: Event = new Event();

            event.id = data.id;
            event.postTitle = data.postTitle;
            event.postContent = data.postContent;
            event.postStatus = data.postStatus;
            event.guid = data.guid;

            let postMetaItems = data.postMeta;

            for (let postMetaItem of postMetaItems) {
                if (postMetaItem.metaKey == 'event_date') {
                    event.eventDate = DateUtils.formatDateWithMonthName(postMetaItem.metaValue);
                }
            }

            if (event.postContent != null) {
                event.imageUrl = this.getImageUrl(event.postContent);
                event.registrationUrl = this.getRegistrationUrl(event.postContent);
                event.postDescription = this.getDescription(event.postContent);
            }
            
            events.push(event);
        }

        return events;
    }

    static getImageUrl(content: string) {
        let imageUrl = null;
        
        let imageSplit = content.split('src="');
        if (imageSplit[1] != null) {
            imageUrl = imageSplit[1].split('"')[0];
        }

        return imageUrl;
    }

    static getRegistrationUrl(content: string) {
        let registrationUrl = null;

        let contentSplit = content.split('href="');
        
        if (contentSplit[1] != null) {
            registrationUrl = this.sanitizeUrl(contentSplit[1].split('"')[0]);
        }

        return registrationUrl;
    }

    static getDescription(content: string) {
        let description = null;
        let contentSplit = content.split('/></a>');

        if (contentSplit == null || contentSplit.length == 0) {
            contentSplit = content.split('/>');
        }

        if (contentSplit[1] != null) {
            description = contentSplit[1];
        }

        return description;
    }

    static getMetaValue(sermon: Sermon, metaKey: string) {
        let metaValue = null;
        let attachmentMetaData = sermon.attachmentMetaData;

        if (attachmentMetaData != null) {
            let keySplit = attachmentMetaData.split(metaKey + '\"');
            if (keySplit.length > 0 && keySplit[1] != null) {
                let valueSplit = keySplit[1].split('\"');
                if (valueSplit.length > 0 && valueSplit[1] != null) {
                    metaValue = valueSplit[1];
                } 
            }
        }

        return metaValue;
    }

    static sanitizeUrl(url: string): string {
        return url.replace(/&amp;/, '&');
    }

    static sanitizePostDescription(sermon: Sermon) {
        console.log(sermon.postDescription);
        if (sermon.postDescription != null && sermon.postDescription.split('Welcome to New Creation Family Church') != null) {
            let descriptionSplit = sermon.postDescription.split('Welcome to New Creation Family Church');

            if (descriptionSplit[0] != null) {
                sermon.postDescription = descriptionSplit[0].trim();

                if (sermon.postDescription.charAt(sermon.postDescription.length - 1) != '.') {
                    sermon.postDescription += '.';
                }
            }
        }
    }
}