import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  url = environment.api + '/Value';

  constructor(public http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
