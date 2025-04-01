import React, { useState } from "react"; 
import "../index.css";

const AddBook = () => {
    const [newBook, setNewBook] = useState({ title: "", author: "", poster: "" });
    const [addedBooks, setAddedBooks] = useState([]);

   
    const handleInputChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    
    const handleAddBook = (e) => {
        e.preventDefault();
        if (newBook.title && newBook.author && newBook.poster) {
            setAddedBooks([...addedBooks, newBook]);
            setNewBook({ title: "", author: "", poster: "" }); 
        }
    };

    return (
        <div className="add-book-container">
            <h3 className="add-book-title">Add a New Book</h3>

           
            <form onSubmit={handleAddBook} className="add-book-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    value={newBook.title}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={newBook.author}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                />
                <input
                    type="text"
                    name="poster"
                    placeholder="Image URL"
                    value={newBook.poster}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                />
                <button type="submit" className="add-button">
                    Add Book
                </button>
            </form>

           
            <div className="books-grid">
                {addedBooks.map((book, index) => (
                    <div key={index} className="book-card">
                        <img src={book.poster} alt={book.title} className="book-image" />
                        <h3 className="book-title">{book.title}</h3>
                        <p className="book-author">by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddBook;


