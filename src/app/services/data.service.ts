import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = 'https://test-qu7xr6pbka-uc.a.run.app/get_info'; 
    return this.http.get<any>(url);
  }

}

