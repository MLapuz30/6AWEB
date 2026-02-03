import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  partners: any [] = [
    {company: 'Microsoft', trademark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png', Sponsorship: 'Platinum', Website: 'https://www.microsoft.com/en-ph'},
    {company: 'Apple, Inc.', trademark: 'https://www.clipartmax.com/png/middle/3-36404_apples-logo-apple-logo-original.png', Sponsorship: 'Gold', Website: 'https://www.apple.com/'},
    {company: 'Amazon', trademark: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png', Sponsorship: 'Silver', Website:'https://www.amazon.com/'},
    {company: 'Google, Inc.', trademark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png', Sponsorship: 'Bronze', Website:'https://www.google.com/'},
  ]
}
