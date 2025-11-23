import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectCategory } from '../../components/project-category/project-category';
import { CompanyInfo } from '../../config/company-info';
import { DriveImagePipe } from '../../drive-image-pipe';

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  technologies: string[];
  bio: string;
  experience: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    ProjectCategory,
    DriveImagePipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './client-styles.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  companyInfo = CompanyInfo;
  isModalOpen = false;
  selectedMember: TeamMember | null = null;



  allMembers: TeamMember[] = [];
  allClients: any[] = [];

  ngOnInit(): void {
    this.allMembers = [...this.companyInfo.teamMembers, ...this.companyInfo.teamMembers];
    this.allClients = [...this.companyInfo.clients, ...this.companyInfo.clients];
    
    // Initialize AOS asynchronously to prevent blocking
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        import('aos').then(AOS => {
          AOS.default.init({
            duration: 300,
            once: true,
            offset: 50,
            disable: 'mobile'
          });
        });
      }, 100);
    }
  }

  ngAfterViewInit(): void {
    this.setupCounterObserver();
  }

  setupCounterObserver(): void {
    setTimeout(() => {
      const statsSection = document.querySelector('.stats-section');
      if (!statsSection) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => this.animateCounters(), 200);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      observer.observe(statsSection);
    }, 500);
  }

  animateCounters(): void {
    this.animateNumber('projectsCounter', 50);
    this.animateNumber('clientsCounter', 25);
    this.animateNumber('experienceCounter', 3);
  }

  animateNumber(elementId: string, target: number): void {
    const element = document.getElementById(elementId);
    
    if (!element) return;
    
    let current = 0;
    const increment = target / 30;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + '+';
      }
    }, 60);
  }

  openMemberModal(member: TeamMember): void {
    this.selectedMember = member;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedMember = null;
    document.body.style.overflow = 'auto';
  }

  openClientSite(website: string) {
    window.open(website, '_blank');
  }

  onImageError(event: any, name: string) {
    event.target.src = `https://via.placeholder.com/400x400/667eea/white?text=${encodeURIComponent(name)}`;
  }
}