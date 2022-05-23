
import React, { useRef } from 'react';
import { useState,useEffect } from 'react';
import './myTeam.css'


const MyTeam = ({members, setMembers}) => {
	const textInput= useRef()
	const [name, setName]=useState('');

	const handleDelete =(e, name)=>{
		const pokeDeleted = members.filter(poke => poke.name !== name)
		setMembers(pokeDeleted)  
	  }

	  const handleRename =(e, name)=>{
		const pokeRename = members.map(poke => ((poke.name === name) ? {name: textInput.current, url: poke.url} : {name: poke.name, url: poke.url}))
		 setMembers(pokeRename)
		   return setMembers
		//textInput.current.value = ''
	  }

	  useEffect(() =>{
		textInput.current=name	
	  }, [name])
	
	const index = (url) => {
        let trimmed = url.split('/')
        return trimmed[trimmed.length - 2]
    }
	return ( 
		<div className='myTeam'>
			<div className='teamOne'>

				<h1>M&#160;&#160; Y&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; P&#160;&#160; O&#160;&#160; K&#160;&#160; E&#160;&#160; M&#160;&#160; O&#160;&#160; N&#160;&#160; S&#160;&#160;&#160;&#160;&#160;&#160; T&#160;&#160; E&#160;&#160; A&#160;&#160; M</h1>
				
			</div>
			<div className="teamTwo">
					
				<h2>There are &#160;&#160;<span>{members.length}</span> &#160;&#160;in the team</h2>
			</div>
			
			<div className="teamShowList">
				{members.map(({ name, url }) => (
					<div key={url} 	className="teamPoke"> 
						<img className="teamIcon"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index(url)}.png`} />
						<p>{name}</p>
					<div className="AddNewName">
						<input type="text" placeholder='newName...'
						ref={textInput} onChange={e => setName(e.target.value)}/>
					</div>
						<button onClick={(e)=>handleRename(e, name)}>Rename </button>
						<button onClick={(e)=>handleDelete(e, name)}>Delete </button>
					</div>
				))}
				
			</div>
			
		
		</div>
	 );
}
 
export default MyTeam;

