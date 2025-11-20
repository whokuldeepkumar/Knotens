import { Component } from '@angular/core';
import { CompanyInfo } from '../../config/company-info';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  companyInfo = CompanyInfo;
}
