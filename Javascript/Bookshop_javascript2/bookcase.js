//import {books} from "books.js";

function createBookList(books) {
    const bookListContainer = document.querySelector('.bookListContainer'); //finds the section in HTML with the class bookListContainer
    bookListContainer.className = "bookListContainer";
    const title = document.createElement('h2'); //creates a h2 element
    title.className = "title-h2"
    const titleText = document.createTextNode( 'Recommended Books'); //creates text inside the h2 element
    titleText.className = "titleText";
    
    const bookProfiles = document.createElement ('div');
    bookProfiles.className = 'bookProfileDiv';

    books.map((_book) => {
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";

        const bookImage = document.createElement("img"); // use this to create element e.g. 'img'
        bookImage.src = _book.image;
        bookImage.alt = _book.name;
        bookCard.appendChild(bookImage) 
        bookImage.className = "bookImage";

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = _book.author;
        bookCard.appendChild(bookAuthor);
        bookAuthor.className = "bookAuthor";

        const bookPrice = document.createElement('p');
        bookPrice.textContent = _book.price;
        bookCard.appendChild(bookPrice);
        bookPrice.className = "bookPrice";

        const bookDescription = document.createElement('p');
        bookDescription.textContent = _book.description;
        bookCard.appendChild(bookDescription);
        bookDescription.className = "bookDescription";

        const bookButton = document.createElement('button');
        bookButton.textContent = "Add";
        bookCard.appendChild(bookButton);
        bookButton.className = "bookButton";  

        bookProfiles.appendChild(bookCard);  
    });

    title.appendChild(titleText);
    bookListContainer.appendChild(title);
    bookListContainer.appendChild(bookProfiles);
}

createBookList(books);