import {
    Box,
    Button,
    Container,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import "./AddForm.css";
import {ChangeEvent, FormEvent, ReactNode, useState} from "react";
import {Book} from "../models/BookModel";
import AddIcon from '@mui/icons-material/Add';
import {toast} from "react-toastify";


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
    const [book, setBook] = useState<Book>(initialState);
    const [showForm, setShowForm] = useState(false);

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
        toast("Book successfully added")
    }
    return (
        <Container maxWidth="lg">
            <Button type="button" onClick={()=> setShowForm(!showForm)}>{showForm ? "CLOSE" :<AddIcon/>}</Button>
            {showForm &&
            <Box sx={{bgcolor: '#efebe9', p: "1rem", pb: "2rem", mb: "2rem"}}>
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
            </Box>}
        </Container>
    )
}