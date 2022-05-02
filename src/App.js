import { useState } from 'react';
import './App.css';
// import SkylineDropdown from './components/SkylineDropdown';
// import WaterfrontDropdown from './components/WaterfrontDropdown';
// import CastleDropdown from './components/CastleDropdown';
import SloganList from './components/SloganList';
import SloganForm from './components/SloganForm';
import CityNameInput from './components/CityNameInput';
import City from './components/City';
import Dropdown from './components/Dropdown';

function App() {
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [skylineId, setSkylineId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [slogans, setSlogans] = useState(['The Rose City']);

  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <City skylineId={skylineId} waterfrontId={waterfrontId} castleId={castleId} />
      <h1>
        {/* dynamically update the city name here using state */}
        Welcome to beautiful {cityName}!
      </h1>
      <div className="bottom">
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <CityNameInput setCityName={setCityName} />
        <section className="dropdowns">
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
          <Dropdown dropdown="waterfront" setId={setWaterfrontId} />
          <Dropdown dropdown="skyline" setId={setSkylineId} />
          <Dropdown dropdown="castle" setId={setCastleId} />
          {/* <WaterfrontDropdown setWaterfrontId={setWaterfrontId} /> */}
          {/* <SkylineDropdown setSkylineId={setSkylineId} /> */}
          {/* <CastleDropdown setCastleId={setCastleId} /> */}
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        {/* here, the SloganList component takes the array of slogans that lives in state */}
        <SloganForm slogans={slogans} setSlogans={setSlogans} />
        <SloganList slogans={slogans} />
      </div>
    </div>
  );
}

export default App;
