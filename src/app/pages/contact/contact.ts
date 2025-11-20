import { Component } from '@angular/core';
import { CompanyInfo } from '../../config/company-info';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  companyInfo = CompanyInfo;
}
