/* Import array from data.js // Render list of episode names
// UseState selected episode from list
// Each item has unique key
// Message tells user to select episode if none is selected
// Episode's details are given once selected (Number, Name, Description)
// UI elements are organized as component functions
// Style with CSS
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import { episodeList } from './data';

export default function App() {
  const [episode, setEpisode] = useState(null);

  return (
   
    <div className="main-div">
      <h1>Dark Echoes Episodes</h1>
      <div className="episodes-list">
      
      <ul>
        <h2>Episodes List</h2>
        {episodeList.map((episode) => (
          <p key={episode.id} onClick={() => setEpisode(episode)}>
            {episode.title}
          </p>
        ))}
      </ul>
      </div>

      {!episode ? 
      (<div className="suggestion">
      <p>Please select an episode to see details.</p>
      </div>)
      : 
      (<div className="details-section">
          <h2>Episode #{episode.id} - {episode.title}</h2>
          <h3>Description:</h3>
          <p>{episode.description}</p>
      </div>)}
    </div>
  );
}

