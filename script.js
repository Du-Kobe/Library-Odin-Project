//variables 
const displayBook = document.getElementById("display-book");
const bookBtn = document.getElementById("add-new-book");
const bookFormDisplay = document.getElementById("add-book-form");
const formDoneBtn=document.getElementById("done-button");
const formCloseBtn=document.getElementById("close-button");
const bookTitleInput = document.getElementById("book-title")
const bookAuthorInput=document.getElementById("book-author")
const bookDescriptionInput = document.getElementById("book-description")
const bookForm = document.getElementById("book-form")
const deleteBtn = document.getElementById("book-delete-button")


let isFormShowing = false; 

const library = [];

//Form for adding new book
bookBtn.addEventListener("click",()=>{
    openForm()
}
)

//submit and close form
formDoneBtn.addEventListener("click", ()=>{
    const bookTitle = bookTitleInput.value 
    const bookAuthor = bookAuthorInput.value
    const bookDescription = bookDescriptionInput.value
    if (bookTitle === '' || bookAuthor==='' || bookDescription==='') {
        alert("Please write something...")
    } else {
        creatingBook()
        displayingBook(bookTitle, bookAuthor, bookDescription)
        closeForm(bookTitle, bookAuthor, bookDescription)
        clearForm(bookTitle, bookAuthor, bookDescription)
    }
})

formCloseBtn.addEventListener("click", ()=>{
    closeForm()
})

//function to check and open form
function openForm () {
    if (isFormShowing === false) {
        bookFormDisplay.style.display="block"
        isFormShowing = true;
       } else if (isFormShowing === true) { 
        alert("Please fill in the form first...");
       }
}

//function to close/submit Form
function closeForm () {
    bookFormDisplay.style.display="none";
    isFormShowing=false;
}

//Book constructor
function Book (title, author, description) {
    this.title = title,
    this.author = author,
    this.description = description
};

//Function to create and push book into array
function creatingBook (bookTitle, bookAuthor, bookDescription) {
    const  newBook = new Book(bookTitle, bookAuthor, bookDescription);
    library.push(newBook);
}

//function to display book
function displayingBook (bookTitle, bookAuthor, bookDescription) {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("id","book-card");
    bookCard.innerHTML = `
     <div id="text-container">
        <h1 id="display-book-title">${bookTitle}</h1>
        <h2 id="display-book-author">By: ${bookAuthor}</h2>
        <p id="display-book-description"><span id="display-word">Description</span>:${bookDescription}</p>
     </div>
     <div id="book-buttons">
        <button id="book-edit-button">Edit</button>
        <button id="book-delete-button">Delete</button>
     </div>
    `
    displayBook.appendChild(bookCard);
}

//clear form
function clearForm (title, author, description) {
  bookForm.reset()
}

function deleteBook () {
    
}
