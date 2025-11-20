import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
  projectCount: number;
}

@Component({
  selector: 'app-project-category',
  imports: [CommonModule],
  templateUrl: './project-category.html',
  styleUrl: './project-category.scss',
})
export class ProjectCategory implements OnInit {
  categories: Category[] = [
    {
      id: 1,
      name: 'Web Development',
      icon: '🌐',
      description: 'Modern, responsive websites and web applications',
      projectCount: 15
    },
    {
      id: 2,
      name: 'Jewelry Shop Billing System',
      icon: '💎',
      description: 'Complete billing and inventory management solution',
      projectCount: 8
    },
    {
      id: 3,
      name: 'App Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications',
      projectCount: 12
    },
    {
      id: 4,
      name: 'ERP Development',
      icon: '🏢',
      description: 'Enterprise resource planning systems',
      projectCount: 10
    }
  ];

  allCategories: Category[] = [];

  ngOnInit(): void {
    this.allCategories = [...this.categories, ...this.categories, ...this.categories];
  }
}
