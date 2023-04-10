import {useEffect, useState} from "react";
import {Book} from "./BookModel";
import axios from "axios";

export default function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        axios.get("api/books")
            .then((response) => {
                setBooks(response.data)
                console.log(response);
            })
            .catch(reason => console.error(reason))
    }

    function addBook(book: Book) {
        axios.post("api/books", book)
            .then(response => response.data)
            .then(data => setBooks(books => [data, ...books]))
            .catch(reason => console.error(reason))
    }

    function deleteBook(isbn: string) {
        axios.delete(`api/books/${isbn}`)
            .then(() =>
                setBooks(books => {
                    return books.filter(book => isbn !== book.isbn)
                }))
            .catch(reason => console.error(reason))
    }

    return {books, setBooks, loadBooks, addBook, deleteBook}
}