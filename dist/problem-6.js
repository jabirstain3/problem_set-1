"use strict";
{
    const isRecentBook = (book) => {
        const runningYear = new Date().getFullYear();
        const age = runningYear - book.publishedYear;
        return age <= 5;
    };
    const book1 = {
        tittel: "Harry Potter",
        author: "J.K. Rowling",
        publishedYear: 1997
    };
    console.log(isRecentBook(book1));
}
