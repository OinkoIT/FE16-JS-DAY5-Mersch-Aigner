// ADVANCED EX1

/* Create an external JSON file that will contain the data( e.g. 
  `{'title': 'Javascript for Dummies',
   'author': 'Dummy Dumb Dumb',
   'read': 'false'
  }`
Iterate through the array of books. For each book, create a <p> element with the book title and author and append it to the page.
Each book should have an image cover.
Change the style of the book depending on whether you have read it or not. */

"use strict";

const book = JSON.parse(books);

console.log(book);

const output = document.querySelector(".output");

const printBooks = () => {
    output.innerHTML = "";
    book.forEach ((item, i) => {
    if (book[i].read=="true"){
    output.innerHTML += `<p class="green"> ${book[i].title} by ${book[i].author} </p> <br>
    <img src="${book[i].cover}" width="200px" alt="">`; } else if (book[i].read=="false") {
        output.innerHTML += `<p class="red"> ${book[i].title} by ${book[i].author} </p> <br>
    <img src="${book[i].cover}" width="200px" alt="">`;
    };
})
};

printBooks();
