import { Injectable } from '@angular/core';
import { Blog } from '../pages/all-blogs/all-blogs.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private apiUrl = 'http://localhost:1337/api'; // Replace with your Strapi API URL

  constructor(private http: HttpClient) { }

  // API call to get all blogs
  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/blogs`);
  }
}
