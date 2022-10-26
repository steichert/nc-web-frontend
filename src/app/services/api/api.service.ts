import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    public getEventPosts(fromDate: string, toDate: string) {
        let requestUrl = `${environment.ncApiUrl}/posts/events`;

        let requestParams = {
            "fromDate": fromDate,
            "toDate": toDate
        };
        
        return this.http.get(requestUrl, {params: requestParams});
    }

    public getSermonPosts(fromDate: string, toDate: string) {
        let requestUrl = `${environment.ncApiUrl}/posts/sermons`;

        let requestParams = {
            "fromDate": fromDate,
            "toDate": toDate
        };
        
        return this.http.get(requestUrl, {params: requestParams});
    }

    public sendEmail(requestBody: any) {
        let requestUrl = `${environment.ncApiUrl}/mail/send`;

        return this.http.post(requestUrl, requestBody);
    }
}