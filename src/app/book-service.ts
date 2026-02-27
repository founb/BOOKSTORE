import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class BookService {
  private http = inject(HttpClient);
  private url = 'http://localhost/dwc/index.php';


  getAllBook() {
    this.http.get(this.url)
  }

  createBook() { }
  updateBook() { }
  deleteBook() { }

}
