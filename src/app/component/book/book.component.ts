import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Core/Services/book.service';
import { Books } from 'src/app/Models/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books !: Books[] ;
  previewMode : boolean  = false;
  searchString : string  = "";


  constructor(private bookService  : BookService){

  }

  onClickImage(book : Books){
    book.previewMode = !book.previewMode;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.getBooks(this.searchString);
  }

  private getBooks(author: string) {
    this.bookService.getBooks(author).then((books)=>{
      this.books  = books;
      console.log(books)
    })
  }


}
