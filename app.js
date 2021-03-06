
class Book{
  constructor(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isDisplayed = false;
  }
  info(){
    if (this.read){
        return `${this.title} by ${this.author}, ${pages} pages, read`;
    } else {
        return `${this.title} by ${this.author}, ${pages} pages, not read yet`;
    }
  }
}

class Library{
  constructor(){
    this.myLibrary = [];
  }
  newBook(){
      let title = document.getElementById('title').value;
      let author = document.getElementById('author').value;
      let pages = document.getElementById('pages').value;
      let read = document.getElementById('isRead').checked;
      this.addBookToLibrary(this.myLibrary,title,author,pages,read);
      this.displayLibrary(this.myLibrary);
  }
  displayLibrary(library){
      for (let book of library){
          if (!book.isDisplayed){
              let book_card = this.createBookCard(book);
              let libraryDisplay = document.querySelector('.bookshelf');
              libraryDisplay.appendChild(book_card);
              book.isDisplayed = true;
          }
      }
  }
  createBookCard(book){
      let book_card = document.createElement('div');
      book_card.classList.add('book-card');
      book_card.id = 'book-card'+this.myLibrary.indexOf(book);
      let title = document.createElement('div');
      title.innerText = `Title: ${book.title}`;
      let author = document.createElement('div');
      author.innerText = `Author: ${book.author}`;
      let pages = document.createElement('pages');
      pages.innerText = `Pages: ${book.pages}`;
      let hasRead = document.createElement('button');
      hasRead.innerText = 'Read';
      hasRead.id = 'read-button'+this.myLibrary.indexOf(book);
      if (book.read){
          hasRead.style.backgroundColor = 'green';
      } else {
          hasRead.style.backgroundColor = 'red';
      }
      hasRead.addEventListener('click', () => {
          let index = this.myLibrary.indexOf(book);
          let button = document.getElementById('read-button'+index);
          if (book.read){
              book.read = false;
              button.style.backgroundColor = 'red';
          } else {
              book.read = true;
              button.style.backgroundColor = 'green';
          }
      });
      let remove = document.createElement('button');
      remove.id = 'removeButton' + this.myLibrary.indexOf(book);
      remove.innerText = 'Remove';
      remove.addEventListener('click',() => {
          let index = this.myLibrary.indexOf(book);
          this.myLibrary.splice(index,1);
          let bookshelf = document.querySelector('.bookshelf');
          let child = document.getElementById('book-card'+index);
          bookshelf.removeChild(child);
          let children = bookshelf.children;
          for (let i = 0;i< children.length;i++){
              let childID = children[i].id;
              children[i].id = 'book-card'+i;
              let buttons = children[i].querySelectorAll('button');
              for (let j = 0;j< buttons.length;j++){
                  if (j == 0){
                      buttons[j].id = 'read-button'+i;
                  } else if (j == 1){
                      buttons[j].id = 'removeButton'+i;
                  }
              }
          }
      });
      book_card.appendChild(title);
      book_card.appendChild(author);
      book_card.appendChild(pages);
      book_card.appendChild(hasRead);
      book_card.appendChild(remove);
      return book_card;
  }
  addBookToLibrary(library,title,author,pages,read){
      let book = new Book(title,author,pages,read);
      library.push(book);
  }
}

const myLibrary = new Library();
let newBookButton = document.querySelector('.newBookButton');
newBookButton.addEventListener("click",() => myLibrary.newBook());
