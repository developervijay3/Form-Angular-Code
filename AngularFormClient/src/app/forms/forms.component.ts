import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder,
         Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import {FormPoster} from '../services/formPoste.service';
import { Customer } from './forms';
import { Router } from '@angular/router';


function ratingrange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean} |null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return{ 'range': true};
        }
        return null;
    };
}

function emailMatcher(c: AbstractControl) {
    const emailControl = c.get('email');
    const confirmControl = c.get('Confirmemail');
    if (emailControl.pristine || confirmControl.pristine ) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return{'match': true};
}
@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit  {
    userAdded: Boolean = false;
    customerForm: FormGroup;
    emailPattren = '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$';
    customer: Customer = new Customer();
    plans = ['Basic', 'Advanced',  'Pro'];
    constructor(private fb: FormBuilder,
                private _formPoster: FormPoster,
                private _router: Router) {

    }

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: ['Johny', [Validators.required, Validators.minLength(5)]],
            lastName: ['Methew', []],
            emailGroup: this.fb.group({
                email: ['a@a.com', [Validators.required, Validators.pattern(this.emailPattren)]],
                Confirmemail: ['a@a.com', [Validators.required]],
            }, {validator: emailMatcher }),
            password: ['Akash@123', [Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,15}'),
                    ]],
            subScription: [this.plans[1]]
        });

    }

    resetForm(): void {
        const out = confirm('Do you want to reset');
        if (out === true) {
            this.customerForm.reset();
        }
    }

    save() {
        console.log(this.customerForm);
        this._formPoster.postEmployeeForm(this.customerForm.value)
            .subscribe((data) => console.log('success', data),
        (err) => console.log('error', err));
        this._router.navigate(['/user']);
    }

    populateData(): void {
        this.customerForm.setValue({
            firstName: 'John',
            lastName: 'Methaw',
            emailGroup: {email: 'test@test.com',
            Confirmemail: 'test@test.com'},
            password: 'Test@1236',
            subScription: this.plans[1]

        });
    }

 }
