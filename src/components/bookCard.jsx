import React, { useEffect, useState } from "react";
import image1 from "../assets/book.jpg";

const BookCard = ({ book, onAddToBookshelf }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (onAddToBookshelf === undefined) setDisplay("hidden");
    else setDisplay("block");
  }, []);
  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  return (
    <div className="flex flex-col  p-4 gap-2 md:h-96 w-64 justify-between items-center bg-color1  rounded-md overflow-scroll relative">
      {imageUrl ? (
        <img
          className="w-32 ring-2 ring-black ring-offset-2"
          src={imageUrl}
          alt={book.title}
        />
      ) : (
        <img className="w-32" src={image1} alt={book.title} />
      )}
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-lg capitalize">{book.title}</h2>
        <p className="text-base font-light">
          <span className="font-semibold">By:</span>{" "}
          {book.author_name && book.author_name.join(", ")}
        </p>
        <button
          className={`${display} w-fit px-6 py-2 text-base font-semibold bg-black rounded-md text-white `}
          onClick={() => onAddToBookshelf(book)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default BookCard;
