const myLibrary = [];

function Book(author = 'unknown', title = 'unknown', noOfPages = '0', isRead = false) {
    //constructor
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let noOfPages = document.querySelector("#no-of-pages").value;
    let isRead = document.querySelector("#is-read").checked;
    let newBook = new Book(author, title, noOfPages, isRead);
    myLibrary.push(newBook);
    resetForm();
    refreshPage();
}

function resetForm() {
    document.querySelector("#author").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#no-of-pages").value = "";
    document.querySelector("#is-read").checked = false;
}

function removeBook(i) {
    myLibrary.splice(i, 1);
    refreshPage()
}

function refreshPage() {
    let library = document.querySelector("#library");
    library.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let cardDetails = document.createElement('div');
        cardDetails.setAttribute("class", "book-card");
        cardDetails.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.noOfPages} pages</p>
                <p class="read-status">${book.isRead ? "Read" : "Not Read Yet"}</p>
            </div>
            <button class="del-btn" onclick="removeBook(${i})">Delete</button>
            `;
        library.appendChild(cardDetails);
    }
}

const submitFormBtn = document.querySelector("#form-value");
const openFormBtn = document.querySelector("#add-book");

openFormBtn.addEventListener('click', (e) => {
    let form = document.querySelector(".form-modal");
    form.style.display = "flex";
});

submitFormBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    addBookToLibrary();
    let form = document.querySelector(".form-modal");
    form.style.display = "none"
    
})



refreshPage();