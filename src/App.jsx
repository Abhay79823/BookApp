import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/BookApp/" element={<Home />} />
                <Route path="/books/:category" element={<BrowseBooks />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;

