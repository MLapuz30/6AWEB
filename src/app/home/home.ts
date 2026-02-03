import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  countries : any[] = [
    {img: 'https://www.ilxtravel.com/wp-content/uploads/2024/09/Eiffel-Tower-France-1024x682.webp', name: 'France', desc: 'The largest country in Western Europe, has long been a gateway between the noperen southernt-regions.', topic: 'Architecture and Fine Arts'},
    {img: 'https://a.storyblok.com/f/112937/567x464/b521a9ee4b/visit_seoul_web.jpg/m/620x0/filters:quality(70)/', name: 'Seoul', desc: 'Korean Seoul (formally Soul-t^ukpyste, \'Special City of Sourr). city and capital of South * ** (Korea(the Republic of Korea).', topic: 'Humanities and Arts'},
    {img: 'https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg', name: 'San Francisco', desc: 'It is a cultural and financial centre of the western United States and one of the country\'s most cosmpolitian cities.', topic: 'Science and Technology'},
    {img: 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt35f139cc2bffb3d3/67bd8e3d304ea983d882b86c/iStock-1363326074-2-Header_Mobile.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart', name: 'Boston', desc: 'Best known for is famous boked beans. Femaby Park, The Bostorin Marrathon, and of course for the bar from Cheers.', topic: 'Engineering and Tech'}
  ]

}
