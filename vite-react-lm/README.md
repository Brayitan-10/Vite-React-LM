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

// <div className='card'>
          //   <div>
          //     <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          //   </div>
          //   <span>{pokemon.name}</span>
          // </div>

// function inputHandler(e) {
  //   setName(e.target.value);
  // }


<>
      <div className='card-container'>
        {pokemon.map((pokemon) => (
          <Card key={pokemon.id} style={{ width: '18rem', padding: "2em" }}>
            <Card.Img variant="top" className='poke-img' src={pokemon.sprites.other.dream_world.front_default} />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>
                INFO DEL POKEMON
              </Card.Text>
              <Button variant="primary">More Information</Button>
            </Card.Body>
          </Card>
        ))}
      </div> <br />
    </>


const [pokemon, setPokemon] = useState([])

  function searchHandler(e) {
    let searchedPokemon = pokemon.filter((pokemon) => pokemon.name.includes(e.target.value))
    console.log(searchedPokemon);

    setPokemon(searchedPokemon)
  }


/* const [pokemon, setPokemon] = useState([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(20) //l=> limit
  const [offset, setOffset] = useState(0)

  async function pedidoApi() {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${offset}`);
    let response = await data.json();
    let arrayPokemon = [];

    for (let i = 0; i < response.results.length; i++) {
      const element = response.results[i];

      let data = await fetch(element.url);
      let responseData = await data.json();

      arrayPokemon.push(responseData)
    }
    setPokemon(arrayPokemon);
  }

  useEffect(() => {
    pedidoApi();
  }, [offset]); */

<h1>{pokemon.name ? capitalizeFirstLetter(pokemon.name) : "Cargando nombre"}</h1>
      {pokemon.sprites ? <img src={pokemon.sprites.other.dream_world.front_default} alt="" /> : "Cargando Imagen"}

 && pokemon.name && pokemon.sprites