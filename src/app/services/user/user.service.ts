import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseApiUrl: string = environment.baseApiUrl;
  private apiUrl: string = `${this.baseApiUrl}api/users`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(this.apiUrl);
  }

  get(id: number): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.apiUrl}/${id}`);
  }

  getByLogin(login: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.apiUrl}/get-by-login/${login}`);
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
