function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [
  { title: "The Alchemist", author: "Paulo Coelho", pages: "172", read: "Yes" },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: "320",
    read: "No",
  },
  {
    title: "The Girl Who Drank the Moon",
    author: "Kelly Barnhill",
    pages: "416",
    read: "No",
  },
];

function addBookToLibrary(title, author, pages, read) {
  // const title = prompt("Enter the Title of the book");
  // const author = prompt("Enter the name of the author");
  // const pages = prompt("Enter the total number of pages in the book");
  // const read = prompt("Have you read the book? Type 'YES' if yes and 'NO' if not");
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

const webpageContainer = document.querySelector(".webpage-container");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
webpageContainer.appendChild(cardContainer);

myLibrary.forEach((book, index) => displayBooks(book, index));

function displayBooks(book, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-index", index);

  const closeButton = document.createElement("img");
  closeButton.setAttribute("src", "./images/x.svg");
  closeButton.classList.add("close-button");

  const bookNameDiv = document.createElement("div");
  const bookNameLabel = document.createElement("span");
  bookNameLabel.textContent = "Title:";
  const bookName = document.createElement("div");
  bookName.textContent = ` ${book.title}`;

  const bookAuthorDiv = document.createElement("div");
  const bookAuthorLabel = document.createElement("span");
  bookAuthorLabel.textContent = "Author:";
  const bookAuthor = document.createElement("div");
  bookAuthor.textContent = ` ${book.author}`;

  const noOfPagesInBookDiv = document.createElement("div");
  const noOfPagesInBookLabel = document.createElement("span");
  noOfPagesInBookLabel.textContent = "No. of pages:";
  const noOfPagesInBook = document.createElement("div");
  noOfPagesInBook.textContent = ` ${book.pages}`;

  const readDiv = document.createElement("div");
  const readLabel = document.createElement("span");
  readLabel.textContent = "Read?:";
  const read = document.createElement("div");
  read.classList.add("read-status");
  read.textContent = ` ${book.read}`;

  // const bookAuthor = document.createElement("div");
  // bookAuthor.textContent = `Author: ${book.author}`;

  // const noOfPagesInBook = document.createElement("div");
  // noOfPagesInBook.textContent = `No. of pages: ${book.pages}`;

  // const read = document.createElement("div");
  // read.classList.add("read-status");
  // read.textContent = `Read?: ${book.read}`;

  const closeButtonAndCardContentDiv = document.createElement("div");

  const cardContentDiv = document.createElement("div");
  cardContentDiv.classList.add("card-content-container");

  const toggleReadStatus = document.createElement("div");
  toggleReadStatus.classList.add("toggle-read");
  toggleReadStatus.textContent = "Toggle Read Status";

  bookNameDiv.appendChild(bookNameLabel);
  bookNameDiv.appendChild(bookName);

  bookAuthorDiv.appendChild(bookAuthorLabel);
  bookAuthorDiv.appendChild(bookAuthor);

  noOfPagesInBookDiv.appendChild(noOfPagesInBookLabel);
  noOfPagesInBookDiv.appendChild(noOfPagesInBook);

  readDiv.appendChild(readLabel);
  readDiv.appendChild(read);

  cardContentDiv.appendChild(bookNameDiv);
  cardContentDiv.appendChild(bookAuthorDiv);
  cardContentDiv.appendChild(noOfPagesInBookDiv);
  cardContentDiv.appendChild(readDiv);

  closeButtonAndCardContentDiv.appendChild(closeButton);
  closeButtonAndCardContentDiv.appendChild(cardContentDiv);

  card.appendChild(closeButtonAndCardContentDiv);
  card.appendChild(toggleReadStatus);

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

formSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const bookName = document.getElementById("book-name");
  const bookAuthor = document.getElementById("book-author");
  const noOfPagesInBook = document.getElementById("number-of-pages-in-book");
  const read = document.getElementById("read");

  if (read.checked) {
    // console.log("checked");
    read.value = "Yes";
  } else {
    // console.log("unchecked");
    read.value = "No";
  }

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
  const toggleReadButtons = document.getElementsByClassName("toggle-read");

  for (let i = 0; i < closeButtons.length || i < toggleReadButtons.length; i++) {
    closeButtons[i].index = i;
    closeButtons[i].addEventListener("click", removeBook);

    toggleReadButtons[i].index = i;
    toggleReadButtons[i].addEventListener("click", toggleRead);
  }
}

// 3 and 4th item removing from array but only removing 3rd from display , so next added item's data index is previous index + 1 ( in this case 3)

function removeEventListenerFromBooks() {
  const closeButtons = document.getElementsByClassName("close-button");
  const toggleReadButtons = document.getElementsByClassName("toggle-read");

  for (let i = 0; i < closeButtons.length || i < toggleReadButtons.length; i++) {
    // closeButtons[i].index = i;
    if (i != closeButtons.length - 1 || i != toggleReadButtons.length) {
      closeButtons[i].removeEventListener("click", removeBook);
      toggleReadButtons[i].removeEventListener("click", toggleRead);
    } else {
      break;
    }
  }
}

function removeBook(e) {
  const closeButtons = document.getElementsByClassName("close-button");
  const toggleReadButtons = document.getElementsByClassName("toggle-read");

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

    for (
      let k = e.target.index;
      k < closeButtons.length || k < toggleReadButtons.length;
      k++
    ) {
      closeButtons[k].index = k;
      toggleReadButtons[k].index = k;

      console.log(closeButtons[k]);
      console.log(`index is ${closeButtons[k].index}}`);

      console.log(toggleReadButtons[k]);
      console.log(`index is ${toggleReadButtons[k].index}`);
    }
  }
}

function toggleRead(e) {
  const Read = document.getElementsByClassName("read-status");

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (card.getAttribute("data-index") == e.target.index) {
      if (myLibrary[e.target.index].read == "No") {
        myLibrary[e.target.index].read = "Yes";
        Read[e.target.index].textContent = "Yes";
      } else {
        {
          myLibrary[e.target.index].read = "No";
          Read[e.target.index].textContent = "No";
        }
      }
    }
  });
}
