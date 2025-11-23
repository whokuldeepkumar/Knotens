import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CompanyInfo } from '../../config/company-info';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  caseStudy?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  companyInfo = CompanyInfo;
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Kashmir Easy Travels',
      description: 'Complete travel booking platform with tour packages, hotel reservations, and customer management system.',
      category: 'Travel & Tourism',
      type: 'web',
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Kashmir+Easy+Travels',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      features: ['Online Booking', 'Payment Gateway', 'Admin Dashboard'],
      liveUrl: 'https://www.kashmireasytravels.com'
    },
    {
      id: 2,
      title: 'JJ 1 Gram Gold Trading',
      description: 'Secure gold trading platform with real-time pricing, portfolio management, and transaction history.',
      category: 'FinTech',
      type: 'fintech',
      image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=JJ+1+Gram+Gold',
      technologies: ['React', 'Express', 'MySQL'],
      features: ['Real-time Pricing', 'Secure Trading', 'Portfolio Tracking'],
      liveUrl: 'https://smcorg.com'
    },
    {
      id: 3,
      title: 'E-Commerce Store',
      description: 'Modern online shopping platform with inventory management and order processing.',
      category: 'E-commerce',
      type: 'ecommerce',
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=E-Commerce+Store',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management'],
      caseStudy: true
    },
    {
      id: 4,
      title: 'Healthcare Mobile App',
      description: 'Patient management and telemedicine mobile application for healthcare providers.',
      category: 'Healthcare',
      type: 'mobile',
      image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Healthcare+App',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      features: ['Appointment Booking', 'Video Consultation', 'Medical Records'],
      caseStudy: true
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course management, student tracking, and assessment tools.',
      category: 'Education',
      type: 'web',
      image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Learning+Management',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      features: ['Course Creation', 'Student Progress', 'Online Assessments'],
      caseStudy: true
    },
    {
      id: 6,
      title: 'Banking Mobile App',
      description: 'Secure mobile banking application with transaction management and digital wallet.',
      category: 'FinTech',
      type: 'fintech',
      image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Banking+App',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      features: ['Account Management', 'Fund Transfer', 'Digital Wallet'],
      caseStudy: true
    }
  ];

  filteredProjects: Project[] = [];
  activeFilter = 'all';

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  filterProjects(type: string) {
    this.activeFilter = type;
    
    if (type === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.type === type);
    }

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick*="${type}"]`)?.classList.add('active');
  }

  openProject(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}