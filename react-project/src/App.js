import { useState } from "react";

function App() {

  const [name, setName] = useState("Elif");
  const [age, setAge] = useState(24);

  return (
    <div className="App">
      <h1>Merhaba {name} </h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ayşe")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>

    </div>
  );
}

export default App;



///////////////////////////////////////

// React Components - Props Dersleri

// import './App.css';
// import User from "./components/User";
// const friends = ["Büşra", "Aygül", "İlayda"];
// const otherFriends = [
//   {
//     id: 1,
//     name: 'Ali'
//   },
//   {
//     id: 2,
//     name: 'Ahmet'
//   },
// ]

// function App() { 
//   return (
//     <>
//       <User
//         name="Elif"
//         surname="Gezen"
//         isLoggedIn={true}
//         age={24}
//         friends={otherFriends}
//         address={{
//           title:"Zeytinburnu/İstanbul",
//           zip:12345
//         }}
//       />
//     </>
//   );
// }

// export default App;