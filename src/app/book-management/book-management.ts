import { Component, model, output, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-management',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-management.html',
  styleUrl: './book-management.css'
})

export class BookManagement {
  selected = model.required<Book>();
  onAdd = output<void>();
  onUpdate = output<void>();
}
