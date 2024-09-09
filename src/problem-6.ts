{
    type Book = {
        tittel: string,
        author: string;
        publishedYear: number;
    }

    const isRecentBook = (book: Book) => {
        const runningYear = new Date().getFullYear();
        const age = runningYear - book.publishedYear;
        return age <= 5;
    }
    
    const book1: Book = {
        tittel: "Harry Potter",
        author: "J.K. Rowling",
        publishedYear: 1997
    }

    console.log(isRecentBook(book1));
    
}