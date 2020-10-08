import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => { //
    let {
        id,
        volumeInfo: {title, authors, description, imageLinks: {thumbnail, smallThumbnail}},
        saleInfo: {listPrice},
    } = props.book;

  const formatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
  });

    return (
        <div>
            <h2>{title}</h2>
            <p>{authors ? authors.join(',') : "No Authors Listed"}</p> 
            <p>{listPrice && formatter.format(listPrice.amount)}</p>
            <p>{description}</p>
            <img src={smallThumbnail || thumbnail} alt={title}/>
            <button onClick={() => props.addBook(title, id)}> Add+ </button>
        </div>
    );
}



//prop type example - Task 1

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string,
        volumeInfo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
            imageLinks: PropTypes.shape({
                smallThumbnail: PropTypes.string,
                thumbnail: PropTypes.string 
            })

        }),
        saleInfo: PropTypes.shape({
            listPrice: PropTypes.shape({
                amount: PropTypes.number
            })
        })  
    })  
}.isRequired

Book.defaultProps = { // default props will show when information is not provided
    id: 'No ID provided.',
    title: 'No title provided.',
    author: 'No author provided.',
    description: 'No description provided.',

    price: 'No price provided.'

}

export default Book;



