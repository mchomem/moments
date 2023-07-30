import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from 'src/app/models/Moment';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl: string = environment.baseApiUrl;
  private apiUrl: string = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse<Moment[]>> {
    return this.http.get<ApiResponse<Moment[]>>(this.apiUrl);
  }

  get(id: number): Observable<ApiResponse<Moment>> {
    return this.http.get<ApiResponse<Moment>>(`${this.apiUrl}/${id}`);
  }

  create(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  update(id: number, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(`${this.apiUrl}/${id}`, formData);
  }
}
