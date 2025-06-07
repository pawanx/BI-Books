import useFetch from "../useFetch"
const BookByAuthor = ({author}) => {
    const {data, loading, error} = useFetch(`https://be-4-assignement1.vercel.app/books/Author/${author}`);
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