import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommendedcard',
  templateUrl: './recommendedcard.component.html',
  styleUrls: ['./recommendedcard.component.css'],
})
export class RecommendedcardComponent {
  @Input() descriptionProp: any;
  @Input() imageProp: any;
  @Input() backgroundProp: any;
}
