import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, finalize } from 'rxjs';

@Component({
  selector: 'app-wine-add',
  templateUrl: './wine-add.component.html',
  styleUrls: ['./wine-add.component.css']
})
export class WineAddComponent {
  @ViewChild('addWineForm') form!: NgForm;
  categories: string[] = [
    'Red Wine',
    'White Wine',
    'Rose'
  ];

  @Input() requiredFileType: string = "jpeg";
  fileName: string | undefined;
  uploadProgress: number | undefined;
  subscription: Subscription | null;

  constructor(private http: HttpClient) {
    this.subscription = null;
  }

  onAdd() {
    console.log(this.form.value);
  }

  onImageSelect(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("image", file);

      const upload$ = this.http
        .post("", formData, {
          reportProgress: true,
          observe: 'events'
        }).pipe(
          finalize(() => this.reset())
        );

       upload$.subscribe();
    }

  }

  cancelUpload() {
    this.reset();
  }

  reset() {
    this.subscription = null;
  }
}
