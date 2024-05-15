import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private baseUrl = 'http://localhost:3000/api/songs';

  constructor(private http: HttpClient) {}

  getSongs(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getSongById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getHotSongs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hot`);
  }
  
}
