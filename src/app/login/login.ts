import { Component,signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

   username = signal('');
  password = signal('');
  errorMessage = signal('');

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

onLogin() {
if (this.username() === 'admin' && this.password() === '1234') {
this.authService.login(this.username());
this.router.navigate(['/books']);
} else {
this.errorMessage.set('Credenciales incorrectas');
}
}

}

