import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'driveImage',
  standalone: true // <--- ADD THIS LINE
})
export class DriveImagePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    if (value.includes('http') || value.includes('assets/')) {
      return value;
    }
    return `https://drive.google.com/thumbnail?id=${value}&sz=w1000`;
  }
}