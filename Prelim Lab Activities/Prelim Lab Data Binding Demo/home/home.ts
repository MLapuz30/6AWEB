import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  name = 'Micah Lapuz';
  title = 'Frontend Developer';
  bio = 'Passionate web developer with project based experience building responsive Angular applications.';

  email = 'lapuzmicah30@gmail.com';
  phone = '09123456789';
  location = 'Pampanga, Philippines';

  skills ='Angular, HTML & CSS, JavaScript';
}
