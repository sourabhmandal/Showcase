import './App.css';
import SidenavBar from './Components/SideNavBar/SidenavBar'
import {ViewPort, Left} from 'react-spaces';
function App() {
  return (
    <div className="App">
      <ViewPort>
        <Left size={60} style={{backgroundColor:"#111817"}}>
          <SidenavBar/>
        </Left>
      </ViewPort>
    </div>
  );
}

export default App;
