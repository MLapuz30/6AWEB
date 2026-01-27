import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { User } from './user.model';
import { Posts } from './posts.model';

@Injectable({
  providedIn: 'root',
})
export class Httpclient {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getUsersRemotely(): Observable<User[]> {
  const cachedUsers = localStorage.getItem('users');

    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    }

    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(users => localStorage.setItem('users', JSON.stringify(users)))
    );
  }

  getProductsRemotely(): Observable<Posts[]> {
  const cachedPosts = localStorage.getItem('post');

    if (cachedPosts) {
      return of(JSON.parse(cachedPosts));
    }

    return this.http.get<Posts[]>(this.postsUrl).pipe(
      tap(posts => localStorage.setItem('post', JSON.stringify(posts)))
    );
  }
}
