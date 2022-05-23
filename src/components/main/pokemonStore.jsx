
import React, { useState, useEffect } from "react";
import  './pokemonStore.css'



const PokemonStore = ({pokemons, handleAdd}) => {
	
	const [searchPoke, setSearchPoke] = useState("");

	const searchPokemon = pokemons.filter(poke => {
		  if(searchPoke == "") return true 
		  else return poke.name.toLowerCase().includes(searchPoke.toLowerCase())
	  })

	const handleRename = (event) => {
		setSearchPoke(event.target.value)
	}

	const index = (url) => {
        let trimmed = url.split('/')
        return trimmed[trimmed.length - 2]
    }

  	return (
		
		<div className="main">
			<div className='one'>

				<h1>O&#160;&#160; U&#160;&#160; R&#160;&#160;&#160;&#160;&#160;&#160; P&#160;&#160; O&#160;&#160; K&#160;&#160; E&#160;&#160; M&#160;&#160; O&#160;&#160; N&#160;&#160; S&#160;&#160;&#160;&#160;&#160;&#160; S&#160;&#160; T&#160;&#160; O&#160;&#160; R &#160;&#160;E</h1>
			</div>
			<div className="two">
					
				<h2>There are &#160;&#160;<span>{searchPokemon.length}</span> &#160;&#160;in the store</h2>
			</div>
			
		  		<input className='searchBar' onChange={handleRename}
				 placeholder="Search Pokemon" />

			<div className="showList">
				
					{searchPokemon.map(({ name, url }) => (
						<div key={url} 	className="poke"> 
							<img className="icon"
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index(url)}.png`} />
							<p>{name}</p>

							<button onClick={(e)=>handleAdd(e, name)}>Add To  Your Team</button>
						</div>
					))}
					
				
			</div>
		</div>
  );
};

export default PokemonStore