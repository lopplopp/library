let myLibrary = [];
const shelf = document.querySelector('.shelf')
const form = document.querySelector('.addform')
const addButton = document.querySelector('.fixedbutton')
addButton.onclick = ()=>{form.style.display = 'flex'};
const closeButton = document.querySelector('#close')
closeButton.addEventListener("click", () => {form.style.display = 'none'});
const submitButton = document.querySelector('#submit')
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
})
const deleteButton = document.querySelectorAll('.delete');
deleteButton.forEach(button => button.addEventListener("click", () => {button.parentElement.remove()}));

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
};


function addBookToLibrary(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let book = `${title}, ${author}, ${pages}`;
    displayBook(book);
    myLibrary.push(book);
    form.style.display = 'none';
    let allInput = document.querySelectorAll('input')
    allInput.forEach(e => e.value='');
};

function displayBook(string){
    let book = string.split(',');
    const card = document.createElement("div");
    card.classList.add("book");
    const button = document.createElement('button');
    button.classList.add("delete");
    button.textContent = 'x'
    button.addEventListener("click", () => {button.parentElement.remove()});
    card.appendChild(button);
    book.forEach(e => {
        const element = document.createElement("p");
        if(isNaN(e)){
            element.textContent = e
        }else{
            element.textContent = `${book[2]} pages`;
        }
        card.appendChild(element);
    })
    shelf.appendChild(card);
}




