import BookCard from "./BookCard";
import {Book} from "./BookModel";

type BookListProps = {
    books: Book[],
    deleteBook: (isbn: string)=> void
}
export default function BookList(props: BookListProps) {
    return (
        <section>
            {props.books.map((book) => {
                return  <BookCard deleteBook={props.deleteBook} key={book.isbn} book={book}/>
            })}

        </section>

    )
}