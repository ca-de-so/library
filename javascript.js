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
  // console.log(`appended book named: ${book.title}`);
}

addEventListenerToBooks();

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
      // console.log(myLibrary[i]);
      // console.log(i);
    }
  }

  removeEventListenerFromBooks();
  addEventListenerToBooks();
  // console.log(`added event listener to ${bookName.value}`);
});

function addEventListenerToBooks() {
  const closeButtons = document.getElementsByClassName("close-button");
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].index = i;
    closeButtons[i].addEventListener("click", removeBook);
  }
}

// 3 and 4th item removing from array but only removing 3rd from display , so next added item's data index is previous index + 1 ( in this case 3)

function removeEventListenerFromBooks() {
  const closeButtons = document.getElementsByClassName("close-button");
  for (let i = 0; i < closeButtons.length; i++) {
    // closeButtons[i].index = i;
    if (i != closeButtons.length - 1) {
      closeButtons[i].removeEventListener("click", removeBook);
    } else {
      break;
    }
  }
}

function removeBook(e) {
  const closeButtons = document.getElementsByClassName("close-button");
  console.log("hi");
  // console.log(++count);
  let cardRemoved = false;
  //e.target.style.backgroundColor = "red";
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (card.getAttribute("data-index") == e.target.index) {
      myLibrary.splice(e.target.index, 1);
      cardContainer.removeChild(card);
      cardRemoved = true;
    }
  });

  if (cardRemoved) {
    for (let j = e.target.index; j < cards.length - 1; j++) {
      cards[j + 1].setAttribute("data-index", j);
    }

    for (let k = e.target.index; k < closeButtons.length; k++) {
      closeButtons[k].index = k;
      console.log(closeButtons[k]);
      console.log(`index is ${k}`);
    }
  }
}
