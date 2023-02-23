import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
  <div class="modal-header">
      <h5 class="modal-title text-center">Message Sent!</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
      </button>
  </div>
  <div class="modal-body"> Thank you for contacting us. We will reach out shortly.
  </div>
  <div class="modal-footer">
      <div>
          <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Close</button>
      </div>
  </div>
  `
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit  {
  focus: any;
  focus1: any;

  contactForm: FormGroup;
  body: any;
  requestOptions: any;

  constructor(public fb: FormBuilder, private http: HttpClient, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      senderName: new FormControl('', [Validators.required]),
      senderEmail: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }


  save(): void {
    if(this.contactForm.valid){

      const url = 'https://vjxkullxhg.execute-api.us-east-1.amazonaws.com/default/sendContactEmailNew';
      const body = JSON.stringify({
        senderEmail: this.contactForm.value.senderEmail,
        senderName: this.contactForm.value.senderName,
        message: this.contactForm.value.message
      });

      this.open();
  
      this.http.post(url, body).subscribe((response) => {
        if(response) {  
          console.log("response", response);
        }
      })

      this.contactForm.reset();

    }

  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
}

}
