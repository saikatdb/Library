let myLibrary = [];

//object constructor
function createBook(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    if(read == 'yes'){
      this.read = 'have read'
    } else if(read == 'no') {
      this.read = 'not read yet'
    };
}
const theHobbit = new createBook('The Hobbit', 'J.R.R. Tolkien', '295', 'yes')
const harryPotter = new createBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling","325", "no")

addBookToLibrary(theHobbit)
addBookToLibrary(harryPotter)

//function to show book info
function addBookToLibrary(obj) {
    myLibrary.push(obj)
}


const body = document.querySelector('body');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');


//function to display book properties
function displayBooks() {
   // Clear any existing rows from the table
   tbody.innerHTML = '';
   
  for (let i = 0; i < myLibrary.length; i++) {
    let row = tbody.insertRow(i);
    for (key in myLibrary[i]) {
      let cell = row.insertCell();
      let text = document.createTextNode(myLibrary[i][key]);
      cell.appendChild(text); 
    }

    //add change status button 
    const btnStatus = document.createElement('button');
    btnStatus.textContent = 'Change Status';
    row.appendChild(btnStatus);
    //add remove button
    const btnId = 'btn' + i;
    const removeBtn = document.createElement('button');
    removeBtn.id = btnId;
    removeBtn.textContent = 'REMOVE';
    row.appendChild(removeBtn);
    //add remove function
    removeBtn.addEventListener('click', () => {
      row.remove();
      myLibrary.splice(i, 1);
      displayBooks();
    })
    btnStatus.addEventListener('click', () => {
      if (myLibrary[i].read === 'have read') {
        myLibrary[i].read = 'not read yet';
      } else if (myLibrary[i].read === 'not read yet') {
        myLibrary[i].read = 'have read';
      }
      displayBooks();
    })
  }
};

displayBooks();

const btn = document.querySelector('.add');
btn.addEventListener('click', () => {
  const form = document.createElement('form');
  body.appendChild(form);

 //create 'p' element
 for (i = 1; i <= 5; i++) {
  const variableName = 'p' + i;
  const para = document.createElement('p');
  para.id = variableName
  form.appendChild(para);
 };

 //create an input element for title
 const title = document.createElement('input');
 title.setAttribute('type', 'text');
 title.setAttribute('name', 'title');
 title.setAttribute('required', 'true');
 title.setAttribute('placeholder', 'TITLE');
 //declaring 'p1' so that no bugs with scope happens
 const p1 = document.getElementById('p1'); 
 p1.appendChild(title);

 //create an input element for author
 const author = document.createElement('input');
 author.setAttribute('type', 'text');
 author.setAttribute('name', 'author');
 author.setAttribute('required', 'true');
 author.setAttribute('placeholder', 'AUTHOR');
 //declaring 'p2' so that no bugs with scope happens
 const p2 = document.getElementById('p2'); 
 p2.appendChild(author);

 //create an input element for pages
 const pages = document.createElement('input');
 pages.setAttribute('type', 'number');
 pages.setAttribute('name', 'pages');
 pages.setAttribute('required', 'true');
 pages.setAttribute('placeholder', 'PAGES');
 //declaring 'p3' so that no bugs with scope happens
 const p3 = document.getElementById('p3'); 
 p3.appendChild(pages);

 //create an input element for reading status
 const status = document.createElement('input');
 status.setAttribute('type', 'checkbox');
 status.setAttribute('name', 'status');
 status.setAttribute('id', 'status');
 //create a label element for status 
 const statusLabel = document.createElement('label');
 statusLabel.setAttribute('for', 'status');
 statusLabel.textContent = 'Have you read it?';
 //declaring 'p4' so that no bugs with scope happens
 const p4 = document.getElementById('p4'); 
 p4.appendChild(statusLabel);
 p4.appendChild(status);

 //create submit and cancel button
 const submit = document.createElement('button');
 const cancel = document.createElement('button');
 submit.setAttribute('id', 'submit');
 submit.setAttribute('type', 'submit');
 cancel.setAttribute('id', 'cancel')
 submit.textContent = 'SUBMIT';
 cancel.textContent = 'CANCEL';
 //declaring 'p5' so that no bugs with scope happens
 const p5 = document.getElementById('p5');
 p5.appendChild(cancel);
 p5.appendChild(submit);

 //disable button to prevent duplicate form
 btn.disabled = true;

 //submit button event
 submit.addEventListener('click', function submitBook(e){
  const titleName = title.value;
  const authorName = author.value;
  const pageNumber = pages.value;

  if (titleName && authorName && pageNumber) {
    if (status.checked) {
      const obj = {};
      const bookName = titleName;
      obj[bookName] = new createBook (titleName, authorName, pageNumber, 'yes');
      const book = obj[bookName];
      addBookToLibrary(book);
    } else if (!status.checked) {
      const obj = {};
      const bookName = titleName;
      obj[bookName] = new createBook (titleName, authorName, pageNumber, 'no');
      const book = obj[bookName];
      addBookToLibrary(book);
    }

    displayBooks();
    form.remove();
    btn.disabled = false;
    e.preventDefault();

  } else {
    return;
  }
 })

 //cancel button event
 cancel.addEventListener('click', (e) => {
  form.remove();
  btn.disabled = false;
  e.preventDefault();
 })
})


