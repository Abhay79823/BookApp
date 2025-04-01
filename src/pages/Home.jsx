import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
    const books = useSelector((state) => state.books); 

    return (
        <div className="home-container">
           
            <h1 className="home-title">Welcome to the Online Library</h1>
            <p className="home-description">Explore The collection of amazing books.</p>

            
            <h2 className="category-title">Book Categories</h2>
            <div className="category-list">
                {["Fiction", "Non-Fiction", "Sci-Fi"].map((category) => (
                    <Link 
                        key={category} 
                        to={`/books/${category}`} 
                        className="category-link"
                    >
                        {category}
                    </Link>
                ))}
            </div>

            
            <h2 className="popular-books-title">Popular Books</h2>
            <div className="book-grid">
                {books.map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.poster} alt={book.title} className="book-image" />
                        <h3 className="book-title">{book.title}</h3>
                        <p className="book-author">By {book.author}</p>
                        <Link 
                            to={`/book/${index}`} 
                            className="book-details-link"
                        >
                            More Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

