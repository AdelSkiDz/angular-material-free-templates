import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  formGroup: UntypedFormGroup | undefined;
  constructor(private _formBuilder: UntypedFormBuilder,) {
    this._init();
  }

  ngOnInit(): void {}

  private _init(): void {
    this.formGroup = this._initFormGroup();
  }

  private _initFormGroup(): UntypedFormGroup {
    this.formGroup = this._formBuilder.group({
      company: ['', []],
      username: ['', []],
      email: ['', []],
      firstname: ['', []],
      lastname: ['', []],
      statut: ['', []],
      dateDebutReception: [''],
      dateFinReception: [''],
    });
    this.formGroup.reset();
    return this.formGroup;
  }

}
