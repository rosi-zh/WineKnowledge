import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onAdd() {
    console.log(this.form.value);
  }
}
