import React, { useState, useEffect } from "react";
import BookCard from "../components/bookCard";
import { Link } from "react-router-dom";

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchData = async () => {
      const url = `https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.docs);
    };

    fetchData();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    bookshelf.push(book);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };

  return (
    <div className="mt-10 w-11/12 mx-auto ">
      <Link
        to={"/bookshelf"}
        className="  bg-black text-white px-4 py-2 rounded-md text-lg font-semibold md:float-right"
      >
        My Bookshelf
      </Link>
      <div className="mt-10 flex flex-col gap-4 items-center">
        <p className=" text-lg font-semibold text-center ">
          SEARCH THE NAME OF BOOK YOU WANTS TO ADD
        </p>
        <input
          className="md:min-w-64 w-fit border bg-transparent border-slate-800 p-2 rounded rounded-e-none focus:outline-none  "
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center mx-auto w-full gap-4 pt-20">
        {searchResults.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            onAddToBookshelf={addToBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
