import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {




public constructor(private title : Title) {
  this.title.setTitle("About Page");
}
public showImage(eventImageSource): void {
  alert("Image clicked..." + eventImageSource )
}


}