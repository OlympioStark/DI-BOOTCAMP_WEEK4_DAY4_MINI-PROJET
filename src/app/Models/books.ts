export class Books {

    previewMode : boolean =   true;
    constructor(public title: string, public authors: string[], public coverImage: string) {
  
    }
  
    getAuthorsList() : string {
      return this.authors.join(", ");
    }

}
