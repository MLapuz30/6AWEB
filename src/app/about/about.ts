import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  event: any = {
    title: 'About the Organization',
    description: `We believe in transparency, cooperation globally, and the free exchange of talent and ideas. A forum for the sharing of these technical and humanitarian discussions is given for meetings, conferences, and other events. We are also committed to creating a secure, constructive, and supportive atmosphere for all participants in conferences, activities, and meetings who participate in these discussions with us.`,
    actionText: 'Click here to get a FREE Gift!',
    actionLink: '#',
    subtitle: 'Conferences are a part of the legacy of this organization and continue today to be a catalyst for creativity. We are committed to developing strategies that support and expand the conference activities throughout the world.'
  };
}
