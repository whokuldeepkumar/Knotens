import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleReviewsService {
  getReviews(placeId: string): Observable<Review[]> {
    const mockReviews: Review[] = [
      {
        name: 'Rohit Sharma',
        rating: 5,
        comment: 'Excellent work by Knotens team. They delivered our e-commerce platform on time with great quality.',
        date: '2 weeks ago'
      },
      {
        name: 'Ankit Gupta', 
        rating: 5,
        comment: 'Outstanding mobile app development services. The team understood our requirements perfectly.',
        date: '1 month ago'
      },
      {
        name: 'Priya Jain',
        rating: 5,
        comment: 'Great experience working with Knotens Software. Professional team and timely delivery.',
        date: '1 month ago'
      },
      {
        name: 'Vikash Kumar',
        rating: 4,
        comment: 'Good technical expertise and clean code delivery. Very satisfied with their services.',
        date: '2 months ago'
      },
      {
        name: 'Deepak Singh',
        rating: 5,
        comment: 'Amazing software solutions provider in Jaipur. They helped us digitize our business.',
        date: '3 months ago'
      }
    ];

    return of(mockReviews);
  }
}