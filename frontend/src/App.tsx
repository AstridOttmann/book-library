import React, { useState} from 'react';
import './App.css';
import Header from "./components/Header";
import BookList from "./components/BookList";
import AddForm from "./components/AddForm";
import useBooks from "./hooks/useBooks";
import {Button, ButtonGroup} from "@mui/material";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const {books, setBooks, loadBooks, addBook, deleteBook} = useBooks();
    const [cover, setCover] = useState<string>("")

function showSelectedCover(selectedCover: string){
        return books.filter((book)=> book.cover === selectedCover);
}

    return (
        <div className="App">
            <Header/>
            <ToastContainer autoClose={3000}/>
            <main>
                <AddForm addBook={addBook}/>
                <ButtonGroup sx={{display: "block", textAlign: "center"}} variant="text" aria-label="text button group">
                    <Button type="button"
                            onClick={() => setCover("")}>All</Button>
                    <Button type="button"
                            onClick={() => setCover("SOFTCOVER")}>Softcover</Button>
                    <Button type="button"
                            onClick={() => setCover("HARDCOVER")}>Hardcover</Button>
                    <Button type="button"
                            onClick={() => setCover("EBOOK")}>E-Book</Button>
                    <Button type="button"
                            onClick={() => setCover("AUDIOBOOK")}>Audio-Book</Button>
                </ButtonGroup>
                {cover === "" &&
                    <BookList deleteBook={deleteBook} books={books}/>}
                {cover === "SOFTCOVER" &&
                    <BookList deleteBook={deleteBook}
                              books={showSelectedCover("SOFTCOVER")}/>}
                {cover === "HARDCOVER" &&
                    <BookList deleteBook={deleteBook}
                              books={showSelectedCover("HARDCOVER")}/>}
                {cover === "EBOOK" &&
                    <BookList deleteBook={deleteBook}
                              books={showSelectedCover("EBOOK")}/>}
                {cover === "AUDIOBOOK" &&
                    <BookList deleteBook={deleteBook}
                              books={showSelectedCover("AUDIOBOOK")}/>}
            </main>
        </div>
    );
}

export default App;


/* function handleCoverSelection() {
      books.map((book) => {
          if (book.cover !== cover) {

              setBooks(books.filter((book) => book.cover === cover))
          } else {
              setCover("SOFTCOVER" || "EBOOK" || "HARDCOVER" || "AUDIOBOOK");
              setBooks(prevState => [...prevState]);
          }
      })
  }*/