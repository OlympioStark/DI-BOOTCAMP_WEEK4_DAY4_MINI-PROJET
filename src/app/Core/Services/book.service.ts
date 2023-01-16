import { Injectable } from '@angular/core';
import { Books } from 'src/app/Models/books';
import { BookApiService } from './Api/book.api.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private bookApiService : BookApiService) { }

  getBooks(author : string )  : Promise<Books[]> {
    return new Promise((resolve, reject) => {
       this.bookApiService.request(author).subscribe((books : any)=>{
        let results : Books[] = books.items.map((book : any) => {
          return new Books(
            this.getSafe<string>(()=>book.volumeInfo.title),
            this.getSafe<string[]>(()=>book.volumeInfo.authors),
            this.getSafe<string>(()=>book.volumeInfo.imageLinks.thumbnail)
          )
        })
          resolve(results);
       },
       (error)=>{
          console.log(error);
          reject(error);
        }
       )
    });
  }

  private getSafe<T> (f: () => T) : T  {
    return f();
  }

}
