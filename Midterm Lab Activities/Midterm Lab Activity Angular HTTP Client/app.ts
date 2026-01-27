import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { CommonModule, SlicePipe} from '@angular/common';
import { Posts } from './posts.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('httpclient-demo');
  httpusers: User[] = [];
  httpposts: Posts[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
        this.httpusers = data;
    });
    this.httpClient.getProductsRemotely().subscribe((data) => {
        this.httpposts = data.slice(0,5);
    });
  }
}
