import './App.css';
import User from "./components/User";

const friends = ["Büşra", "Aygül", "İlayda"];
const otherFriends = [
  {
    id: 1,
    name: 'Ali'
  },
  {
    id: 2,
    name: 'Ahmet'
  },
]

function App() {
  return (
    <>
      <User
        name="Elif"
        surname="Gezen"
        isLoggedIn={false}
        age={24}
        friends={otherFriends}
      />
    </>
  );
}

export default App;