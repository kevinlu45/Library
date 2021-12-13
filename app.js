function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isDisplayed = false;
    this.info = function(){
        if (this.read){
            return `${this.title} by ${this.author}, ${pages} pages, read`;
        } else {
            return `${this.title} by ${this.author}, ${pages} pages, not read yet`;
        }
    }
}
function addBookToLibrary(library,title,author,pages,read){
    let book = new Book(title,author,pages,read);
    library.push(book);
}

function createBookCard(book){
    let book_card = document.createElement('div');
    book_card.classList.add('book-card');
    book_card.id = 'book-card'+myLibrary.indexOf(book);
    let title = document.createElement('div');
    title.innerText = `Title: ${book.title}`;
    let author = document.createElement('div');
    author.innerText = `Author: ${book.author}`;
    let pages = document.createElement('pages');
    pages.innerText = `Pages: ${book.pages}`;
    let hasRead = document.createElement('button');
    hasRead.innerText = 'Read';
    hasRead.id = 'read-button'+myLibrary.indexOf(book);
    if (book.read){
        hasRead.style.backgroundColor = 'green';
    } else {
        hasRead.style.backgroundColor = 'red';
    }
    hasRead.addEventListener('click', () => {
        let index = myLibrary.indexOf(book);
        let button = document.getElementById('read-button'+index);
        console.log(button);
        if (book.read){
            book.read = false;
            button.style.backgroundColor = 'red';
        } else {
            book.read = true;
            button.style.backgroundColor = 'green';
        }
    });
    let remove = document.createElement('button'); 
    remove.id = 'removeButton' + myLibrary.indexOf(book);
    remove.innerText = 'Remove';
    remove.addEventListener('click',() => {
        let index = myLibrary.indexOf(book);
        myLibrary.splice(index,1);
        let bookshelf = document.querySelector('.bookshelf');
        let child = document.getElementById('book-card'+index);
        bookshelf.removeChild(child);
        let children = bookshelf.children;
        console.log(children);
        for (let i = 0;i< children.length;i++){
            let childID = children[i].id;
            console.log(childID);
            children[i].id = 'book-card'+i;
        }
    });
    book_card.appendChild(title);
    book_card.appendChild(author);
    book_card.appendChild(pages);
    book_card.appendChild(hasRead);
    book_card.appendChild(remove);
    return book_card;
}
function displayLibrary(library){
    for (book of library){
        if (!book.isDisplayed){
            let book_card = createBookCard(book);
            let libraryDisplay = document.querySelector('.bookshelf');
            libraryDisplay.appendChild(book_card);
            book.isDisplayed = true;
        }
    }
}

function newBook(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('isRead').checked;
    addBookToLibrary(myLibrary,title,author,pages,read);
    displayLibrary(myLibrary);
    console.log(myLibrary);
}

let myLibrary = [];
let newBookButton = document.querySelector('.newBookButton');
newBookButton.addEventListener("click",newBook);

