function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [
  { title: "Harry Potter", author: "Abc author", pages: "1245", read: "YES" },
  {
    title: "The fault in our stars",
    author: "John Green",
    pages: "4532",
    read: "NO",
  },
  { title: "Adventures of Zelda", author: "Zelda Brown", pages: "4231", read: "NO" },
];

function addBookToLibrary(title, author, pages, read) {
  // const title = prompt("Enter the Title of the book");
  // const author = prompt("Enter the name of the author");
  // const pages = prompt("Enter the total number of pages in the book");
  // const read = prompt("Have you read the book? Type 'YES' if yes and 'NO' if not");
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//addBookToLibrary();

const body = document.querySelector("body");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
body.appendChild(cardContainer);

myLibrary.forEach((book, index) => displayBooks(book, index));

function displayBooks(book, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-index", index);

  const closeButton = document.createElement("img");
  closeButton.setAttribute("src", "./images/x.svg");
  closeButton.classList.add("close-button");

  const bookName = document.createElement("div");
  bookName.textContent = `Title: ${book.title}`;

  const bookAuthor = document.createElement("div");
  bookAuthor.textContent = `Author: ${book.author}`;

  const noOfPagesInBook = document.createElement("div");
  noOfPagesInBook.textContent = `No. of pages: ${book.pages}`;

  const read = document.createElement("div");
  read.textContent = `Read?: ${book.read}`;

  const cardContentDiv = document.createElement("div");

  cardContentDiv.appendChild(bookName);
  cardContentDiv.appendChild(bookAuthor);
  cardContentDiv.appendChild(noOfPagesInBook);
  cardContentDiv.appendChild(read);
  card.appendChild(closeButton);
  card.appendChild(cardContentDiv);

  cardContainer.appendChild(card);
}

const dialog = document.querySelector("dialog");
const formSubmitButton = document.querySelector("button");

const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

formSubmitButton.addEventListener("click", () => {
  const bookName = document.getElementById("book-name");
  const bookAuthor = document.getElementById("book-author");
  const noOfPagesInBook = document.getElementById("number-of-pages-in-book");
  const read = document.getElementById("read");
  addBookToLibrary(
    bookName.value,
    bookAuthor.value,
    noOfPagesInBook.value,
    read.value
  );

  dialog.close();

  for (let i = 0; i < myLibrary.length; i++) {
    if (i == myLibrary.length - 1) {
      displayBooks(myLibrary[i], i);
    }
  }
});

const closeButton = document.querySelectorAll(".close-button");

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // e.target.style.backgroundColor = "red";
    // e.currentTarget.style.backgroundColor = "purple";
    let index = e.currentTarget.getAttribute("data-index");
    myLibrary.splice(index, 1);
  });
});
