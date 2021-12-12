function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function(){
        if (this.read){
            return `${this.title} by ${this.author}, ${pages} pages, read`;
        } else {
            return `${this.title} by ${this.author}, ${pages} pages, not read yet`;
        }
    }
}
function addBookToLibrary(library){
    let title = 'poop';
    let author = 'poop poo';
    let pages = '500';
    let book = new Book(title,author,pages);
    library.push(book);
    library.push(book);
    library.push(book);
    library.push(book);
    library.push(book);
    library.push(book);
}
function createBookCard(book){
    let book_card = document.createElement('div');
    book_card.classList.add('book-card');
    let title = document.createElement('div');
    title.innerText = `Title: ${book.title}`;
    let author = document.createElement('div');
    author.innerText = `Author: ${book.author}`;
    let pages = document.createElement('pages');
    pages.innerText = `Pages: ${book.pages}`;
    let hasRead = document.createElement('button');
    hasRead.innerText = 'Read';
    book_card.appendChild(title);
    book_card.appendChild(author);
    book_card.appendChild(pages);
    book_card.appendChild(hasRead);
    return book_card;
}
function displayLibrary(library){
    for (book of library){
        let book_card = createBookCard(book);
        let libraryDisplay = document.querySelector('.bookshelf');
        libraryDisplay.appendChild(book_card);
    }
}
function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

let myLibrary = [];
addBookToLibrary(myLibrary);
displayLibrary(myLibrary);
