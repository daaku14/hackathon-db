import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      // Show preview of the selected image
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      // Handle the file upload logic here
      console.log('File uploaded:', this.selectedFile);

      // Optionally reset the form
      this.selectedFile = null;
      this.imageUrl = null;
    }
  }

}
