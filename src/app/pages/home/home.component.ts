import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectCategory } from '../../components/project-category/project-category';
import { CompanyInfo } from '../../config/company-info';

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
    ProjectCategory
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companyInfo = CompanyInfo;
  isModalOpen = false;
  selectedMember: TeamMember | null = null;

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      designation: 'Full Stack Developer & Team Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS'],
      bio: 'Passionate full-stack developer with 5+ years of experience in building scalable web applications. Specializes in modern JavaScript frameworks and cloud technologies.',
      experience: '5+ years in web development, leading teams of 3-5 developers. Expert in MEAN/MERN stack development and DevOps practices.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      designation: 'UI/UX Designer & Frontend Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      technologies: ['React', 'Figma', 'TypeScript', 'Tailwind CSS'],
      bio: 'Creative designer and frontend developer who bridges the gap between design and development. Focuses on creating intuitive and beautiful user experiences.',
      experience: '4+ years in UI/UX design and frontend development. Specialized in responsive design and modern CSS frameworks.'
    },
    {
      id: 3,
      name: 'Amit Patel',
      designation: 'Backend Developer & DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      technologies: ['Python', 'Django', 'Docker', 'Kubernetes'],
      bio: 'Backend specialist with expertise in Python and cloud infrastructure. Passionate about building robust, scalable systems and automating deployment processes.',
      experience: '4+ years in backend development and DevOps. Expert in microservices architecture and container orchestration.'
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      designation: 'Mobile App Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      technologies: ['Flutter', 'React Native', 'Firebase', 'Swift'],
      bio: 'Mobile development expert creating cross-platform applications that deliver native performance. Specializes in Flutter and React Native development.',
      experience: '3+ years in mobile app development. Published 10+ apps on both iOS and Android platforms with 100K+ downloads.'
    }
  ];

  allMembers: TeamMember[] = [];

  ngOnInit(): void {
    this.allMembers = [...this.teamMembers, ...this.teamMembers, ...this.teamMembers];
    
    // Initialize AOS with offset to show content immediately
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => {
        AOS.default.init({
          duration: 400,
          once: true,
          offset: 0,
          disable: false
        });
      });
    }
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
}