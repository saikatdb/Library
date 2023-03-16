let myLibrary = [];

function book(title, author, pages, read) { //constructor
    this.title = title
    this.author = author
    this.pages = pages
    if(read == 'yes'){
      this.read = 'have read'
    } else if(read == 'no') {
      this.read = 'not read yet'
    };
}
  const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', '295', 'no')

function addBookToLibrary(obj) {
    myLibrary.push(obj)
}

addBookToLibrary(theHobbit)
console.log(myLibrary)

let table = document.querySelector('table');
let tbody = document.querySelector('tbody');

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let row = tbody.insertRow(i);
    for (key in myLibrary[i]) {
      let cell = row.insertCell();
      let text = document.createTextNode(myLibrary[i][key]);
      cell.appendChild(text);
      console.log(myLibrary[i][key])
    }
  }
}

displayBooks()