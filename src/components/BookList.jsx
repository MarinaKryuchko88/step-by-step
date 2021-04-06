
// const BookList = (props) => (
//   <ul>
//     {props.books.map((book) => (
//       <li>{book.name}</li>
//     ))}
//   </ul>
// );
    // ИЛИ ТАК:
const BookList = ({books}) => (
  <ul>
    {books.map((book) => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);

export default BookList