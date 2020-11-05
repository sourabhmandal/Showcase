import './App.css';
import SidenavBar from './Components/SideNavBar/SidenavBar'
import Hero from './Components/HeroImg/Hero'
import {ViewPort, Left} from 'react-spaces';
function App() {
  return (
    <div className="App">
      <ViewPort>
        <Left size={60} style={{backgroundColor:"#111817"}} order={1}>
          <SidenavBar/>
        </Left>
        <Left size={500} order={2} style={{backgroundColor:"#3fefee"}}>
          <Hero/>
        </Left>
      </ViewPort>
    </div>
  );
}

export default App;
