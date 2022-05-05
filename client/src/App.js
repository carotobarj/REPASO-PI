import { BrowserRouter } from "react-router-dom";
import{Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      </BrowserRouter>
      
    </div>
  )
}

export default App;
