import React from "react"; 
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";

const BookDetails = () => {
    const { id } = useParams();
    const book = useSelector((state) => state.books[id]); 

    if (!book) return <h2 className="book-not-found">Book Not Found</h2>;

    return (
        <div className="book-details-container">
            <img src={book.poster} alt={book.title} className="book-poster" />
            <h1 className="book-title">{book.title}</h1>
            <h2 className="book-author">By {book.author}</h2>
            <p className="book-description">{book.description || "No description available."}</p>
            <Link to="/books/all" className="back-to-browse">Back to Browse</Link>
        </div>
    );
};

export default BookDetails;


