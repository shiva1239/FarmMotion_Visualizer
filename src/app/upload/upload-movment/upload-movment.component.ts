import { Component } from '@angular/core';
import { MovementUploadService } from 'src/app/services/movement-upload.service';

@Component({
  selector: 'app-upload-movment',
  templateUrl: './upload-movment.component.html',
  styleUrls: ['./upload-movment.component.css']
})
export class UploadMovmentComponent {

  successMessage: string = '';
  errorMessage: string = '';
  selectedFile: File | null = null;

  constructor(private movementUploadService: MovementUploadService) {}
  onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

onUpload() {
  if (this.selectedFile) {
    this.movementUploadService.uploadFile(this.selectedFile).subscribe(
      (response) => {
        console.log('Success Response:', response);
        this.errorMessage = '';
        this.successMessage = 'File uploaded successfully'; // Reset success message

      },
      (error) => {
        console.error('Error Response:', error);
        // Display error message
        this.errorMessage = 'File upload failed. Please try again.';
        this.successMessage = ''; // Reset success message
      }
    );
  } else {
    // Handle case where no file is selected
    this.errorMessage = 'Please choose a file before uploading.';
    this.successMessage = ''; // Reset success message
  }
}
}
