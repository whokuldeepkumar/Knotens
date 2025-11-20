import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CompanyInfo } from '../../config/company-info';
import { SafePipe } from '../../pipes/safe.pipe';
import { GoogleReviewsService, Review } from '../../services/google-reviews.service';

@Component({
  selector: 'app-contact',
  imports: [SafePipe, NgFor],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  companyInfo = CompanyInfo;
  reviews: Review[] = [];

  constructor(private reviewsService: GoogleReviewsService) {}

  ngOnInit() {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewsService.getReviews(this.companyInfo.contact.location.placeId)
      .subscribe(reviews => {
        this.reviews = reviews;
      });
  }

  openMap() {
    const address = encodeURIComponent(this.companyInfo.contact.address.full);
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(url, '_blank');
  }

  getDirections() {
    window.open(this.companyInfo.contact.location.directionsUrl, '_blank');
  }
}
