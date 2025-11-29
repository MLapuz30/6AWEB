import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration';
  title = "My First App";
  description = "This is my New Angular Application";

  imageUrl= "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750";
  w = 200;
  h = 200;
  altText = "Cute Cat Image";

  textColor = "maroon";
  yourName = '';

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

//Part2
//Interpolation
studName = "Micah Lapuz";
score = 100;

//Property binding
imageUrl2 = "https://st5.depositphotos.com/11953928/62586/v/450/depositphotos_625863138-stock-illustration-cute-girl-cap-icon-isolated.jpg";
isDisabled = true;

//Attribute binding
colSpanValue = 3;

//Class binding
isPassing = true;

//Style binding
boxColor ="pink";
boxSize ="150px";
}