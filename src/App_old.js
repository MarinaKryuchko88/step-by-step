import UserDetails from "./components/UserDetails";
import BookList from "./components/BookList";

function App() {
  const user = {
    firstName: "Bobby",
    lastName: "Ivanov",
    age: 25,
  };

  const favouriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ];

  return (
    <div className="App">
      <h1>Hello from react app</h1>
      <UserDetails anyUser={user} />
      <BookList books={favouriteBooks} />
    </div>
  );
}

export default App;
