import { Routes } from '@angular/router';
import { BooksList } from './books-list/books-list';
import { BookManagement } from './book-management/book-management';
import { ContactForm } from './contact-form/contact-form';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
export const routes: Routes = [
{ path: 'login', component: Login },
{ path: 'books', component: BooksList, canActivate: [authGuard]},
{ path: 'management', component: BookManagement, canActivate: [authGuard] },
{ path: 'contact', component: ContactForm, canActivate: [authGuard] },
{ path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
];
