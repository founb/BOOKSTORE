import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = signal<string | null>(null);

  constructor(private router:Router) {}
  login(username: string) {
    this.user.set(username);
  }

  logout() {
    this.user.set(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.user() !== null;
  }

  getUser() {
    return this.user();
  }
}
