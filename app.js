// class for books -->
class Book {
  constructor(title, author, ibsn) {
    this.title = title;
    this.author = author;
    this.ibsn = ibsn;
  }
}

//class for UI static Methods-=->
class UI {
  constructor() {}

  // display book list
  static displayBookList() {
    let storedBooks = store.getBooks();
    storedBooks.forEach((book) => {
      UI.addBook(book);
    });
  }
  // displayAlert
  static displayAlert(message, type) {
    let div = document.createElement("div");
    let para = document.createElement("p");
    para.innerHTML = message;
    div.appendChild(para);
    div.className = type;
    let container = document.querySelector(".container");
    let form = document.querySelector("#form");
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
  // add book to UI
  static addBook(book) {
    let bookList = document.getElementById("book-list");
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.ibsn}</td><td><a href='#' class='btn btn-danger delete'>X</a></td>`;
    bookList.appendChild(row);
  }
  // clear submit form
  static clearSubmit() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#ibsn").value = "";
  }
  // delete book from UI
  static deleteBook(e) {
    if (e.classList.contains("delete")) {
      e.parentElement.parentElement.remove();
    }
  }
}
// class for storing books
class store {
  constructor() {}
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// event listners -->

// display books event
addEventListener("DOMContentLoaded", () => {
  UI.displayBookList();
});
// submit book event
addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let ibsn = document.querySelector("#ibsn").value;
  // validation required
  if (title === "" || author === "" || ibsn === "") {
    UI.displayAlert("All fields are required", "alert danger");
  }
  // create book object using constructor
  else {
    const book = new Book(title, author, ibsn);
    UI.addBook(book);
    // validation success
    UI.displayAlert("Book Added", "alert success");

    UI.clearSubmit();
    store.addBook(book);
  }
});
// remove book event
let list = document
  .querySelector("#book-list")
  .addEventListener("click", (e) => {
    UI.deleteBook(e.target);
  });
// store book event
