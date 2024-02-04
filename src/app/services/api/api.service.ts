import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    public getEventsByDateRange(fromDate: string, toDate: string): Observable<any> {
        let requestUrl = `${environment.ncApiUrl}/v1/events`;

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

    public getSermonSeriesByName(seriesName: string) {
        let requestUrl = `${environment.ncApiUrl}/v1/series/${seriesName}`;
        return this.http.get(requestUrl);
    }

    public getLatestSermon() {
        return this.http.get(`${environment.ncApiUrl}/v1/sermons?latest=true`);
    }

    public getAllPagedSermons(pageNumber: number) {
        return this.http.get(`${environment.ncApiUrl}/v1/sermons/page/${pageNumber}`);
    }

    public getAllSermonSeriesLite() {
        return this.http.get(`${environment.ncApiUrl}/v1/sermon-series/lite`);
    }

    public getAllPagedSermonSeriesLite(page: number, searchTerm: string) {
        return this.http.get(`${environment.ncApiUrl}/v1/sermon-series/page/${page}/lite?searchTerm=${searchTerm}`);
    }

    public getSermonSeriesByIdLite(id: number) {
        return this.http.get(`${environment.ncApiUrl}/v1/sermon-series/${id}/lite`);
    }

    public getSermonSeriesBySeoUrl(seoUrl: string) {
        return this.http.get(`${environment.ncApiUrl}/v1/sermon-series/url/${seoUrl}`);
    }

    public getSermonBySeoUrl(seoUrl: string) {
        return this.http.get(`${environment.ncApiUrl}/v1/sermons/url/${seoUrl}`);
    }

    public searchSermons(page: number, searchType: string | null, searchTerm: string | null, sortType: string, sortDirection: string) {
        if (searchType == 'sermonDate' && searchTerm != null && searchTerm != '') {
            let searchDate = new Date(searchTerm);
            searchDate.setHours(searchDate.getHours() - 2);
            searchTerm = new Date(searchDate).toISOString().split('T')[0];
        }

        let requestUrl = `${environment.ncApiUrl}/v1/sermons?page=${page}&sortType=${sortType}&sortDirection=${sortDirection}&searchType=${searchType}&searchTerm=${searchTerm}`;

        return this.http.get(requestUrl);
    }

    public getAllLifeGroups() {
        return this.http.get(`${environment.ncApiUrl}/v1/life-groups/cache`);
    }
}
