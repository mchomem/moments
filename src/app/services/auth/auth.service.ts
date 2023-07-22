import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ApiResponse } from 'src/app/models/ApiResponse';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseApiUrl: string = environment.baseApiUrl;
  private apiUrl: string = `${this.baseApiUrl}api/auth`;

  constructor(private http: HttpClient) { }

  get(login: string, password: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.apiUrl}/${login}/${password}`);
  }

}
