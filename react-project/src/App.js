import './App.css';

const name = "Elif";
const isLoggedIn = false;

function App(){
  return(
    <>
      <h1>
        { isLoggedIn &&  `Benim Adım ${name}`}
        { !isLoggedIn && `Giriş Yapınız!`}

        { isLoggedIn 
          ? `Adım ${name}`
          : `Giriş Yap!`}
      </h1>
    </>
  )
}
 export default App;