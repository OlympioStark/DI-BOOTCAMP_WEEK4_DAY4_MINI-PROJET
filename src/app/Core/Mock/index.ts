import { Books } from "../../Models/books"

export const preloadedBooks = () : Books[] => {
    return  [
      new Books(
        "Sunshine",
        ["Alex Garland"],
        "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      ),
      new Books(
        "Ex Machina",
        ["Alex Garland"],
        "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      ),
      new Books(
        "Annihilation",
        ["Alex Garland"],
        "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      )
    ]
}
