import {Book} from "./BookModel";
import {Button, Card, ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';

type BookProps = {
    book: Book,
    deleteBook: (isbn: string) => void
}

export default function BookCard(props: BookProps) {
    function handleDelete() {
        props.deleteBook(props.book.isbn)
    }

    return (
        /* <ThemeProvider theme={theme}>*/
        <Card variant="outlined">
            <h2>{props.book.title}</h2>
            <p>{props.book.author}</p>
            <small>{props.book.isbn}</small>
            <p>{props.book.cover.toLowerCase()}</p>
            <Button variant="outlined" color="error" type="button" onClick={handleDelete}>Delete</Button>
        </Card>
        /*  </ThemeProvider>*/
    )
}

/*  const theme = createTheme({
          palette: {
               primary: {
                   light: '#757ce8',
                   main: '#3f50b5',
                   dark: '#002884',
                   contrastText: '#fff',
               },
               secondary: {
                   light: '#ff7961',
                   main: '#f44336',
                   dark: '#ba000d',
                   contrastText: '#000',
               },
           },
       });*/
