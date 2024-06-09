import React, { useState, useEffect } from "react";
import BookCard from "../components/bookCard";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("bookshelf"));
    setBookshelf(storedBooks || []);
  }, []);

  const clearBookshelf = () => {
    localStorage.removeItem("bookshelf");
    setBookshelf([]);
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <button
        className="bg-black text-white px-4 py-2 rounded-md text-lg font-semibold md:float-right"
        onClick={clearBookshelf}
      >
        Clear Bookshelf
      </button>
      <h1 className="mt-10 text-4xl sm:text-6xl font-bold text-center mb-2">
        MY BOOKSHELF
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-center mx-auto w-full gap-4 pt-20">
        {bookshelf.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
