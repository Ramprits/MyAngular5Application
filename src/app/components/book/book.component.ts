import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { IBook, Book } from './book';
import { MenuItem } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';
import { Title } from '@angular/platform-browser';
import { LoggerService } from '../../core/Logger.Service';
import { ConfirmationService } from 'primeng/components/common/api';

@Component({
  selector: 'b-book',
  templateUrl: './book.component.html',
  styles: [`p-dataTable >>> .ui-datatable-footer {min-height: 60px;}
           .ui-grid-row{margin: 1em;}
           p-dialog>>> .ui-dialog-titlebar{background-color:rgb(224, 229, 233);}`]
})
export class BookComponent implements OnInit {
  msgs: Message[];
  items: MenuItem[];
  books: IBook[];
  selectedBook: IBook;
  newBook: boolean;
  book: Book = new PrimeBook();
  displayDialog: boolean;

  deleteBook(book: IBook): any {
    const index = this.findSelectedCarIndex();
    this.books = this.books.filter((val, i) => i !== index);
    this.book = null;
    this.displayDialog = false;
  }
  viewBook(book: IBook): any {
    alert(book.Name);
  }

  constructor(private bookService: BookService, private title: Title, private logger: LoggerService,
    private confirmationService: ConfirmationService) {
    this.title.setTitle('Book List');
  }

  ngOnInit() {
    this.items = [
      { label: 'View', icon: 'fa-search', command: (event) => this.viewBook(this.selectedBook) },
      { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteBook(this.selectedBook) }
    ];
    this.bookService.getBooks().subscribe(book => { this.books = book; },
      (err) => {
        this.logger.error(err);
      }, () => { this.logger.log(''); });
  }
  onRowSelect(event) {
    this.newBook = false;
    this.book = this.cloneCar(event.data);
    this.displayDialog = true;
  }
  showDialogToAdd() {
    this.newBook = true;
    this.book = new PrimeBook();
    this.displayDialog = true;
  }

  findSelectedCarIndex(): number {
    return this.books.indexOf(this.selectedBook);
  }
  cloneCar(c: Book): Book {
    const book = new PrimeBook();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      book[prop] = c[prop];
    }
    return book;
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this book record?',
      accept: () => {
        // Actual logic to perform a confirmation
      }
    });
  }
}

class PrimeBook implements Book {
  constructor(public BookId?, public Name?, public Description?, public CreatedDate?, public AuthorId?) { }
}


