import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { AnnouncementSliderComponent } from './announcement-slider/announcement-slider.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent,AnnouncementSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GAFI';
}
