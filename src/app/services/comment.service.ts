import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Comment } from '../models/Comment';
import { ApiResponse } from '../models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseApiUrl: string = environment.baseApiUrl;
  private apiUrl: string = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }

  create(data: Comment): Observable<ApiResponse<Comment>> {
    return this.http.post<ApiResponse<Comment>>(`${this.apiUrl}/${data.momentId}/comments`, data);
  }
}
