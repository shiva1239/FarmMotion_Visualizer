import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent {
  successMessage: string = '';
  errorMessage: string = '';
  selectedFile: File | null = null;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
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
