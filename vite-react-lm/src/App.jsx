import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [styles, setStyles] = useState('card');

  const [lang, setLang] = useState("es")

  function styleHandler() {
    if (styles === "card") {
      setStyles("card-style")
    } else {
      setStyles("card")
    }

    setCount(count + 1)
  }

  function languageHandler() {
    if (lang === "es") {
      setLang("en")
    } else {
      setLang("es")
    }
  }

  return (
    <>
      <div>
        <h1>BIENVENIDOS A MI APPLICACION</h1>
      </div>
      <div>
        <h1>{lang}</h1>
        <button onClick={() => languageHandler()}>
          {lang === "es" ? "Cambiar Idioma" : "Change Language"}
        </button>
        {/* <h1>{lang}</h1>
        <button onClick={() => (lang === "es" ? setLang("en") : setLang("es"))}>
          Cambiar Idioma
        </button> */}
      </div>
      <div className={styles}>
        <button onClick={() => styleHandler()}>
          Cambiar contador {count}
        </button>
      </div>
    </>
  )
}

export default App
