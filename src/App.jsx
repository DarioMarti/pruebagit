import { useEffect, useState } from 'react'
import { PeliculaCard } from './componentes/PeliculaCard'
import './index.css'

function App() {
const URL = "http://www.omdbapi.com/?apikey=9c804c4a&S="
const [pelicula, setPelicula] = useState("");
const [peliculaEncontrada, setPeliculaEncontrada]=useState([])
  
const nombrarPelicula=(e)=>{
  setPelicula(e.target.value);
  console.log(pelicula)
}

useEffect(() => {
    const buscarPelicula = async () => {
      if (pelicula.trim() === "") {
        setPeliculaEncontrada([]);
        return;
      }

      try {
        const res = await fetch(URL + pelicula);
        const data = await res.json();

        if (data.Response === "True") {
          setPeliculaEncontrada(data.Search);
        } else {
          setPeliculaEncontrada([]);
        }
      } catch (error) {
        console.log("Error al buscar película:", error);
      }
    };

    buscarPelicula();
  }, [pelicula]);

const buscarPelicula=async(e)=>{
 try{
   e.preventDefault();
 const res = await fetch(URL+String(pelicula))
 const data = await res.json();
  setPeliculaEncontrada(
      data.Search
    )
    console.log(data.Search)
 }
 catch(error){
  console.log(error)
 }

}

const mostrarPeliculas=()=>{
 const peli = peliculaEncontrada.map(pelicula=>{
    return(
      <PeliculaCard key={pelicula.imdbID} title={pelicula.Title} poster={pelicula.Poster} year={pelicula.Year}></PeliculaCard>
    )
  })
  return peli;
}


  return (
    <>
    <header className="w-full shadow-xl  flex justify-center items-center flex-col gap-6">
      <h1 className='font-black  text-white text-2xl '>¡HELLO GIT!</h1>
      <form className='form flex ' onSubmit={buscarPelicula}>
        <input onChange={nombrarPelicula} value={pelicula}  placeholder='matrix, marvel, men in black...'/>
        <button>Buscar</button>
      </form>
    </header>
    
    <main className='flex justify-center mt-12 '>
     <section className='max-w-[1400px] flex-wrap flex gap-6 justify-center'>
      {peliculaEncontrada?mostrarPeliculas():null}
     </section>
    </main>

    </>
  )
}

export default App


//API KEY: 9c804c4a
/*  .then(res => res.json())
  .then(data=> {
    setPeliculaEncontrada(
      {
        poster: data.Poster,
        title: data.Title,
        year: data.Year	
      }
    )
  }) */