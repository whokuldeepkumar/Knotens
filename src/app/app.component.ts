// src/app/app.component.ts

import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DriveImagePipe } from './drive-image-pipe';
import { CompanyInfo } from './config/company-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    DriveImagePipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'knotens-website';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Only initialize AOS in the browser, not on server
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        import('aos').then(AOS => {
          AOS.default.init({
            duration: 400,
            once: true,
            offset: 0,
            disable: false,
            startEvent: 'load'
          });
        });
      }, 100);
    }
  }
}