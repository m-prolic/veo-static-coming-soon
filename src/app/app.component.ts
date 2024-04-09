import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Title } from '@angular/platform-browser';
import { CoomingSoon, CoomingSoonService } from './coming-soon.service';
import { VENDOR_TYPES } from './VENDOR_TYPES';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('comingSoonNgForm') comingSoonNgForm: NgForm;
  comingSoonForm: UntypedFormGroup;
  showComment = false;

  VENDOR_TYPES = VENDOR_TYPES;

  showAlert: boolean = false;
  showThanks = false;

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _title: Title,
    private _comingSoonService: CoomingSoonService
  ) {
    this._title.setTitle('VEO - Uskoro!');
  }

  ngOnInit(): void {
    this.comingSoonForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      vendorTypeKey: [''],
      city: [
        '',
        [
          Validators.pattern(/^[a-zA-ZčćšđžČĆŽĐŠ ]{1,50}$/),
          Validators.maxLength(50),
        ],
      ],
      isVendor: [true, Validators.required],
      message: [
        '',
        [
          Validators.pattern(/^[0-9a-zA-ZčČćĆšŠđĐžŽ.?!,\- ]{1,250}$/),
          Validators.maxLength(250),
        ],
      ],
      phone: [
        '',
        [Validators.pattern(/^[0-9 ]{1,15}$/), Validators.maxLength(15)],
      ],
    });
  }

  isVendorChange(value: boolean) {
    this.comingSoonForm.get('isVendor')?.setValue(value);
    console.log(value);
  }

  submitComingSoon(): void {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;

    let data: CoomingSoon = {
      ...this.comingSoonForm.value,
    };

    if (this.comingSoonForm.get('isVendor')?.value == false) {
      data.vendorTypeKey = 'couple';
    }

    this._comingSoonService
      .createComingSoon(this.comingSoonForm.value)
      .subscribe({
        next: () => {
          this.showThanks = true;
        },
        error: () => {
          this.showAlert = true;
          this.comingSoonForm.enable();
          setTimeout(() => {
            this.showAlert = false;
          }, 3000);
        },
      });
  }
}
