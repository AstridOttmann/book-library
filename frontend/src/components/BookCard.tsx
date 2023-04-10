import {Book} from "../models/BookModel";
import {Button, Card} from "@mui/material";
import {toast} from "react-toastify";

type BookProps = {
    book: Book,
    deleteBook: (isbn: string) => void
}

export default function BookCard(props: BookProps) {
    function handleDelete() {
        props.deleteBook(props.book.isbn)
        toast("Book deleted")
    }

    return (
        /* <ThemeProvider theme={theme}>*/
        <Card variant="outlined">
            <h2>{props.book.title}</h2>
            <p>{props.book.author}</p>
            <small>{props.book.isbn}</small>
            <p>{props.book.cover.toLowerCase()}</p>
            <Button variant="outlined" color="error" type="button"
                    onClick={handleDelete}>Delete</Button>
        </Card>
    )
}


