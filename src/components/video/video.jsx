import React from 'react'
import './video.css'

const video1 = new URL("../../videos/video1.mp4", import.meta.url)
const video2 = new URL("../../videos/video2.mp4", import.meta.url)

const Video = () => {
  return (
	<div className="videos">
	{/* <h2>Pokemons top videos</h2> */}
	<video controls autoPlay loop className="video1" src={video1} ></video>
	<video controls loop className="video2" src={video2} ></video>
	
		
</div>
  );
}

export default Video




