import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter projects correctly', () => {
    component.filterProjects('web');
    expect(component.filteredProjects.length).toBeGreaterThan(0);
    expect(component.filteredProjects.every(p => p.type === 'web')).toBeTruthy();
  });

  it('should show all projects when filter is "all"', () => {
    component.filterProjects('all');
    expect(component.filteredProjects.length).toBe(component.projects.length);
  });

  it('should open project URL', () => {
    spyOn(window, 'open');
    const testUrl = 'https://example.com';
    component.openProject(testUrl);
    expect(window.open).toHaveBeenCalledWith(testUrl, '_blank');
  });
});