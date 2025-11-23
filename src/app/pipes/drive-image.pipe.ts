import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'driveImage',
  standalone: true
})
export class DriveImagePipe implements PipeTransform {
  transform(url: string): string {
    if (!url) return url;
    
    // If already a full URL, return as is
    if (url.startsWith('http')) {
      return url;
    }
    
    // If it's just a file ID, convert to thumbnail URL
    if (url.length > 10 && !url.includes('/')) {
      return `https://drive.google.com/thumbnail?id=${url}&sz=w1000`;
    }
    
    return url;
  }
}