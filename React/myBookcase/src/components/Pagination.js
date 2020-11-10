import React, { useState } from "react";
import Pagination from "react-js-pagination";

const paginatedContent = () => {
    const books = useState(BookList);
    const booksPerPage = 10;
    const [activePage, setCurrentPage] = useState(1);
    const indexOfLastBook = activePage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const renderBooks = currentBooks.map((books, index) => {
        return <li key={ index }>{ books }</li>;
    });
    const handlePageChange = ( pageNumber ) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage( pageNumber)
    };
    return (
        <div>
            <div className="result">
                {renderBooks}
            </div>
            <div className="pagination">
                <Pagination
                    activePage={ activePage }
                    itemsCountPerPage={ 15 }
                    totalItemsCount={ books.length }
                    pageRangeDisplayed={ 10 }
                    onChange={ handlePageChange }
                />
            </div>
        </div>
    )
}

export default paginatedContent