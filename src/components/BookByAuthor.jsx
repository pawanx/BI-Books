import useFetch from "../useFetch"
const BookByAuthor = ({author}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/books/Author/${author}`);
    return data ? (
            <div>
          <h2>Books By Harper Lee</h2>
          <ul>
            {
                data.book.map(book => 
                    <li key={book._id}>{book.title}</li>
                )
            }
          </ul>
        </div>
        ) : (
            loading && <p>Loading...</p>
        )
}
export default BookByAuthor;