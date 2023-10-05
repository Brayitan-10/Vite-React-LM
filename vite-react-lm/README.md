# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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


{/* <h3>Bienvenido {pokemon.name}
          <img src={pokemon?.sprites?.other.dream_world.front_default} alt="" />
        </h3> */}
        {/* <input type="text" onChange={(e) => {
          inputHandler(e)
        }} /> */}

 // function inputHandler(e) {
  //   setName(e.target.value);
  // }