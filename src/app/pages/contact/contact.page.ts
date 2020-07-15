import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Intercom } from 'ng-intercom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
  title: string = 'Thanks for Contacting Arena Online.';
  form: FormGroup;
  submitted = false;

  constructor(
    public _FB: FormBuilder,
    public intercom: Intercom,
    private router: Router
  ) {
    this.form = this._FB.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: [''],
      orderNumber: [''],
      subject: [''],
      comment: ['']
    });
  }

  ngOnInit() {}

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get email() {
    return this.form.get('email');
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    console.log(form);
  }

  openChat(chat) {
    chat.intercom.show();
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
