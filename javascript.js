function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];

function addBookToLibrary() {
  const title = prompt("Enter the Title of the book");
  const author = prompt("Enter the name of the author");
  const pages = prompt("Enter the total number of pages in the book");
  const read = prompt("Have you read the book? Type 'YES' if yes and 'NO' if not");
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary();
