import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  @ViewChild('editNameForm') form!: NgForm;
  fullName = {
    firstName: '',
    lastName: ''
  }

  constructor(private authService: AuthService, private modalService: NgbModal, public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {
    const fullName = this.authService.user!.displayName;
    const names = fullName.split(' ');
    const firstName = names[0];
    const lastName = names[1];

    this.fullName = {
      firstName,
      lastName
    }
  }

  onSave() {
    if (this.form.invalid) {
      return;
    }

    const { firstName, lastName } = this.form.value;
    const displayName = `${firstName.trim()} ${lastName.trim()}`;

    this.authService.editName(displayName).subscribe({
      error: (err) => console.log(err),
    });

  }
}
