
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/header'
import Aside from './components/aside/aside'
import Footer from './components/footer/footer'
import Video from './components/video/video'
import About from './components/about/about'
import Contact from './components/about/contact'
import MyTeam from './components/team/myTeam'
import React, { useState, useEffect } from "react";
import './App.css'
import PokemonStore from './components/main/pokemonStore'



function App() {

  const [members, setMembers] = useState([
		{name:'pikachu', url: 'https://pokeapi.co/api/v2/pokemon-species/25/'}		
	]) 
  const [pokemon, setPokemon] = useState([]);
  

  useEffect(() => {
		const fetchData = async () => { const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon-species/?limit=20000"
		 	);
			const data = await response.json();
		 	setPokemon(data.results);
		};

		fetchData();
	}, []);

  const handleAdd = (e, name) =>{
    const newMember = pokemon.find(poke => poke.name === name);	
   setMembers([...members, { name: newMember.name, url: newMember.url}]);
  console.log(newMember.name)
}

// const handleDelete =(e, name)=>{
//   const pokeDeleted = members.filter(poke => poke.name !== name)
//   setMembers(pokeDeleted)
 
// }

  return (
   <Router>
      <div>
        <Header/> 
        <NavLink to="">Home </NavLink>
				<NavLink to="/myTeam">My Team</NavLink>
				<NavLink to="/videos">Videos</NavLink>
				<NavLink to="/about">About us</NavLink>
				

         <main className="container"> 
				<Routes>
					<Route path="/" element={
            <div>
            <Aside/>
            <PokemonStore pokemons={pokemon}  handleAdd={handleAdd}/>
            
            </div>
          } />
					
          <Route path='/myTeam' element={<MyTeam members={members} setMembers={setMembers} />} />
					<Route path="/about" element={<About/>}/>
          <Route path="/about/contact" element={<Contact/>}/>
					<Route path="/videos" element={<Video/>} />					
				</Routes>
			</main>      
        <Footer/>
      </div>
    
   </Router>
  )
}

export default App
