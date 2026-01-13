import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, AsyncPipe, PercentPipe, TitleCasePipe, KeyValuePipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();

  price = 20000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1 = 8.7589623;
  decimalNum2 = 5.43;

  time$ = interval(1000).pipe(map(val => new Date()));

  a = 0.1030;
  b = 1.0715;

  object: {[key: number]: string} = {2: 'hello', 1: 'world'};
  map = new Map([
    [2, 'hello'],
    [1, 'world'],
  ]);
}


