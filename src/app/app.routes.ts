// src/app/app.routes.ts

import { Routes } from '@angular/router';

// 1. Import your page components
import { HomeComponent } from './pages/home/home.component';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { ProjectsComponent } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

// 2. Define your website's routes
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: About },
    { path: 'services', component: Services },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: Contact },

    // 3. Add a default route
    // This redirects anyone visiting the base URL (http://localhost:4200) to the /home page.
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // (Optional) A 'catch-all' route for 404 errors can be added later
    // { path: '**', component: PageNotFoundComponent } 
];