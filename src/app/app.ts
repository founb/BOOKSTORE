import { Component, inject,OnInit,signal, computed } from '@angular/core';
import { BookService } from './book-service';

import{ RouterOutlet,RouterLink, RouterLinkActive} from '@angular/router';
import { AuthService } from './auth-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  constructor(public authService: AuthService) {}


  private servicio = inject(BookService);






























//   books = signal<Book[]>([
//     { code: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 25 },
//     { code: 2, title: '1984', author: 'George Orwell', price: 15 },
//     { code: 3, title: 'El Quijote', author: 'Miguel de Cervantes', price: 30 }
//   ]);

//   // Libro que se está editando en el formulario
//   selectedBook = signal<Book>({ code: 0, title: '', author: '', price: 0 });

//   totalBooks = computed(() => this.books().length);

//   selectToEdit(book: Book) {
//     console.log('1. Capturado en el Padre:', book);
//     this.selectedBook.set({ ...book });
//   }

//   deleteBook(code: number) {
//     this.books.update(list => list.filter(l => l.code !== code));
//   }

//   updateBook() {
//     this.books.update(listado =>
//       listado.map(l => l.code === this.selectedBook().code ? this.selectedBook() : l)
//     );
//   }

//   addBook() {
//     const newCode = this.books().length + 1;
//     const newBook = { ...this.selectedBook(), code: newCode };
//     this.books.update(list => [...list, newBook]);
//   }
}
