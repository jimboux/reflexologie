import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoaderVisible: boolean = false;
  mailForm: string = "";
  nameForm: string = ""

  onSubmit() {
    if (this.nameForm.length > 0 && this.mailValidityChecker() ) {
      this.isLoaderVisible = true
    }
  }

  mailValidityChecker():boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.mailForm);
  }

  onValueChange(event: Event, inputName: 'name' | 'mail' ) {
    const inputValue = (event.target as HTMLInputElement).value;
    
    if (inputName === 'name') {
      this.nameForm = inputValue;
    } else if (inputName === 'mail') {
      this.mailForm = inputValue;
    }
  }
}
