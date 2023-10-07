import './App.css';
import Contacts from './components/contacts';

function App() {
  return (
    <div className='App'>
      <Contacts />
    </div>
  );
}

export default App;


////////////////////////////////////////////
// -------------- Component Unmount --------------------------

// import UnmountExercise from "./components/UnmountExercise";
// import { useState } from "react";

// function App() {

//   const [isVisible, setIsVisible] = useState(true);

//   return <div className="App">
//     {isVisible && <UnmountExercise />}
//     <br />
//     <button onClick={() =>setIsVisible(!isVisible)}>Toggle</button>
//   </div>
// }

// export default App;



////////////////////////////////
// ----------------------- useEffect----------------------

// import { useState, useEffect } from "react";

// function App() {

//   const [number, setNumber] = useState(0);
//   const [name, setName] = useState("Elif");


//   useEffect(()=>{
//     console.log("Number State ya da Name State güncellendi");
//   },[number, name]);

//   useEffect(()=>{
//     console.log("Component mount edildi!");
//   },[])

//   return (
//     <div className="App">
//       <h1>{number}</h1>
//       <button onClick={()=>setNumber(number+1)}>Click</button>

//       <hr />
//       <h1>{name}</h1>
//       <button onClick={()=>setName("Ayşe")}>Click</button>

//     </div>
//   );
// }

// export default App;


///////////////////////////////////////////////////////////////////
// ---------------- States Dersleri ----------------

// import { useState } from "react";

// function App() {

//   const [name, setName] = useState("Elif");
//   const [age, setAge] = useState(24);
//   const [friends, setFriends] = useState(["Büşra", "Aygül"]);
//   const [address, setAddress] = useState({ title: "İstanbul", zip: 12345 });

//   return (
//     <div className="App">
//       <h1>Merhaba {name} </h1>
//       <h2>{age}</h2>
//       <button onClick={() => setName("Ayşe")}>Change Name</button>
//       <button onClick={() => setAge(25)}>Change Age</button>

//       <hr />
//       <br></br>


//       <h2>Friends</h2>
//       {friends.map((friend, index) => (
//         <div key={index}>{friend}</div>
//       ))}
//       <button onClick={() => setFriends([...friends, "İlayda"])}>Add New Friend</button>


//       <hr />
//       <br></br>

//       <h2>Address</h2>
//       <div>
//         {address.title} {address.zip}
//       </div>

//       <button onClick={() => setAddress({ ...address, title: "Ankara", zip: 98765 })}>Add Address</button>

//     </div>
//   );
// }

// export default App;



/////////////////////////////////////////////////////////////////////////////////////

// ---------------- React Components - Props Dersleri ----------------

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