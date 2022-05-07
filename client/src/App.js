import { BrowserRouter } from "react-router-dom";
import{Route} from "react-router-dom";
import CharacterCreated from "./components/CharacterCreated/CharacterCreated.jsx";
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/character" component={CharacterCreated}/>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
