import './App.css';
import User from "./components/User";

function App() {
  return (
    <>
      <User name="Elif" surname="Gezen" isLoggedIn={false} />
    </>
  );
}

export default App;