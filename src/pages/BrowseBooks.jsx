import React, { useState } from "react"; 
import { useParams, Link } from "react-router-dom";
import booksData from "../data/books.json";
import "../index.css"; 

const BrowseBooks = () => {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState("");

   
    const filteredBooks = booksData.booksData.filter(
        (book) =>
            book.category.toLowerCase() === category.toLowerCase() &&
            (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="browse-books-container">
            <h2 className="browse-books-title">Browse Books - {category}</h2>

          
            <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />

            
            <div className="books-grid">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <div key={index} className="book-card">
                            <img src={book.poster} alt={book.title} className="book-image" />
                            <h3 className="book-title">{book.title}</h3>
                            <p className="book-author">by {book.author}</p>
                            <Link to={`/book/${index}`} className="book-details-link">
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-books-message">No books found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default BrowseBooks;

