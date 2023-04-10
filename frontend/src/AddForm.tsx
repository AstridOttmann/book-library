import {Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import "./AddForm.css"
import {ChangeEvent, FormEvent, ReactNode, useState} from "react";
import {Book} from "./BookModel";
import axios from "axios";

type FormProps = {
    addBook: (book: Book) => void
}
export default function AddForm(props: FormProps) {
    const initialState: Book = {
        title: "",
        author: "",
        isbn: "",
        cover: "EBOOK"
    }
    const [book, setBook] = useState<Book>(initialState)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name;
        const value = event.target.value;
        setBook(
            {...book, [targetName]: value}
        )
    }
    const onChange = (event: SelectChangeEvent<"EBOOK" | "SOFTCOVER" | "HARDCOVER" | "AUDIOBOOK">, child: ReactNode) => {
        const targetName = event.target.name;
        const value = event.target.value;
        setBook(
            {...book, [targetName]: event.target.value}
        )
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addBook(book)
        setBook(initialState)
    }
    return (
        <section className="form-container">
            <Typography sx={{fontSize: "1.5rem", padding: "0.5rem"}} variant="h2" component="h2">
                Add a Book
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField required label="Title" variant="outlined" name="title" value={book.title}
                           onChange={handleChange}/>
                <TextField required label="Author" variant="outlined" name="author" value={book.author}
                           onChange={handleChange}/>
                <InputLabel id="select-cover-label">Select Type</InputLabel>
                <Select
                    labelId="select-cover-label"
                    id="select-cover"
                    name="cover"
                    value={book.cover}
                    label="Age"
                    onChange={onChange}
                >
                    <MenuItem value="SOFTCOVER">Softcover</MenuItem>
                    <MenuItem value="EBOOK">E-Book</MenuItem>
                    <MenuItem value="HARDCOVER">Hardcover</MenuItem>
                    <MenuItem value="AUDIOBOOK">Audio-Book</MenuItem>
                </Select>
                <Button sx={{width: "100px", alignSelf: "center"}} variant="contained" type="submit">Add</Button>
            </form>
        </section>
    )
}