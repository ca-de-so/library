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

function addBookToLibrary() {
  const title = prompt("Enter the Title of the book");
  const author = prompt("Enter the name of the author");
  const pages = prompt("Enter the total number of pages in the book");
  const read = prompt("Have you read the book? Type 'YES' if yes and 'NO' if not");
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//addBookToLibrary();

const body = document.querySelector("body");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
body.appendChild(cardContainer);

myLibrary.forEach((book) => displayBooks(book));

function displayBooks(book) {
  const card = document.createElement("div");
  card.textContent = book.title;
  card.classList.add("card");
  cardContainer.appendChild(card);
}

const dialog = document.querySelector("dialog");
const formSubmitButton = document.querySelector("button");

const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

formSubmitButton.addEventListener("click", () => {
  dialog.close();
});
