import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from
'@angular/forms';
@Component({
selector: 'app-contacto',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './contact-form.html',
styleUrl: './contact-form.css'
})
export class ContactForm {
// Definimos el output para enviar datos al padre
onRegister = output<any>();
profileForm = new FormGroup({
name: new FormControl('', [Validators.required, Validators.minLength(3)]),
email: new FormControl('', [Validators.required, Validators.email])
});
send() {
if (this.profileForm.valid) {
// Emitimos el valor del formulario al padre
this.onRegister.emit(this.profileForm.value);
this.profileForm.reset(); // Limpiamos tras enviar
}
}
}
