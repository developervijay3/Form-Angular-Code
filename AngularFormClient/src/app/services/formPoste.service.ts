
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Login} from '../forms/loginModel/login.model';
import { map } from 'rxjs/operators';

@Injectable()

export class FormPoster {
    constructor(private http: Http,
                private __http: HttpClient) {}

    private userUrl  = 'http://localhost:3002/userlist';

    private extractData(res: Response) {
        const body = res.json();
        return body.fields || { };
    }

    private handleError(error: any) {
        return Observable.throw(error.statusText);
    }

    postEmployeeForm(employee: Login): Observable<any> {
       const body = JSON.stringify(employee);
       const headers = new Headers({'Content-Type': 'application/json'});
       const options = new RequestOptions({headers: headers});

       return this.http.post('http://localhost:3002/login', body, options)
                    .pipe(map(this.extractData));

    }

    getProducts(): Observable<Login[]> {
        return this.__http.get<Login[]>(this.userUrl);
    }
}
