import { Component, input, output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  templateUrl: './books-list.html',
  styleUrl: './books-list.css'
})

export class BooksList {
  books = input<Book[]>([]);
  onDelete = output<number>();
  onEdit = output<Book>();
}

