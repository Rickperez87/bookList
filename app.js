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
  static displayBookList(book) {
    let storedBooks = [
      { title: "Book 1", author: "Mike", ibsn: 12345 },
      { title: "Book 2", author: "Kevin", ibsn: 12346 },
    ];
    let books = storedBooks;
    books.forEach((book) => {
      UI.addBook(book);
    });
  }
  // add book to UI
  static addBook(book) {
    let bookList = document.getElementById("book-list");
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.ibsn}</td><td><a href='#' class='btn btn-danger'>X</a></td>`;
    bookList.appendChild(row);
  }
  //submitBook
  static submitBook()
  // delete book from UI
}
// class for storing books

// event listners -->

// display books event
addEventListener("DOMContentLoaded", () => {
  UI.displayBookList();
});
// submit book event

// delete book event

// store book event
