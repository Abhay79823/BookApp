import React from "react"; 
import { Link } from "react-router-dom";
import "../index.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Online Library</h1>
            <div className="navbar-links">
                <Link to="/BookApp/" className="navbar-link">Home</Link>
                <Link to="/books/all" className="navbar-link">Browse Books</Link>
                <Link to="/add-book" className="navbar-link">Add Book</Link>
            </div>
        </nav>
    );
};

export default Navbar;

