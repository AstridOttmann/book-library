import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import BookList from "./BookList";
import AddForm from "./AddForm";
import useBooks from "./useBooks";
import {Button, ButtonGroup} from "@mui/material";
import {Book} from "./BookModel";

function App() {
    const {books, setBooks, loadBooks, addBook, deleteBook} = useBooks();
    const [cover, setCover] = useState<string>("")


    function handleCoverSelection() {
        books.map((book) => {
            if (book.cover !== cover) {

                setBooks(books.filter((book) => book.cover === selectedCover))
            } else {
                setCover("SOFTCOVER" || "EBOOK" || "HARDCOVER" || "AUDIOBOOK");
                setBooks(prevState => [...prevState]);
            }
        })
    }

    const softCoverBooks = books.filter((book) => book.cover === "SOFTCOVER")

    const hardCoverBooks = books.filter((book) => book.cover === "HARDCOVER")

    const eBooks = books.filter((book) => book.cover === "EBOOK")

    const audioBooks = books.filter((book) => book.cover === "AUDIOBOOK")


    /* function selectCoverSoftcover(){
         books.map((book)=> {
         if (book.cover !== "SOFTCOVER") {
             setBooks(books.filter((book) => book.cover === "SOFTCOVER"))
         } else {
             setBooks(prevState => [...prevState]);
         }})
     }*/
    /* function handleClick() {
         handleCoverSelection(cover)
     }*/

    return (
        <div className="App">
            <Header/>
            <main>
                <AddForm addBook={addBook}/>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => setCover("")}>All</Button>
                    <Button onClick={() => setCover("SOFTCOVER")}>Softcover</Button>
                    <Button onClick={() => setCover("HARDCOVER")}>Hardcover</Button>
                    <Button type="button" onClick={() => setCover("EBOOK")}>E-Book</Button>
                    <Button type="button" onClick={() => setCover("AUDIOBOOK")}>Audio-Book</Button>
                </ButtonGroup>
                {cover === "" &&
                    <BookList deleteBook={deleteBook} books={books}/>}
                {cover === "SOFTCOVER" &&
                    <BookList deleteBook={deleteBook} books={softCoverBooks}/>}
                {cover === "HARDCOVER" &&
                    <BookList deleteBook={deleteBook} books={hardCoverBooks}/>}
                {cover === "EBOOK" &&
                    <BookList deleteBook={deleteBook} books={eBooks}/>}
                {cover === "AUDIOBOOK" &&
                    <BookList deleteBook={deleteBook} books={audioBooks}/>}
            </main>
        </div>
    );
}

export default App;
