import books from 'script.js'
function createBookWishList(amazonBooks) {
    const wishListSection = document.querySelector('#booksGoHere');
    const title = document.createElement('h2');
    const titleText = document.createTextNode('Book Wishlist');
    const bookCard = document.createElement('div');
    bookCard.className = 'bookCardDiv'

    title.appendChild(titleText);
    wishListSection.appendChild(title);
    wishListSection.appendChild(bookCard);

    amazonBooks.map



}


