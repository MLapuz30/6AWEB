import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  imports: [FormsModule],
  templateUrl: './join.html',
  styleUrls: ['./join.css'],
})
export class Join {
  formData = {
    firstname: '',
    lastname: '',
    email: '',
    institution: ''
  };
}
