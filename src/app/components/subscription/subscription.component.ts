import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(public _FB: FormBuilder, public intercom: Intercom) {
    this.form = this._FB.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  ngOnInit() {}

  get email() {
    return this.form.get('email');
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log(form);
  }
}
