import Home from './Home/Home'
import Projects from './Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
   <Router>
   <div className="App">
     <Switch>
       <Route path='/' exact>
          <Navbar/>
          
       </Route>

       <Route path='/projects' exact>
          <Projects />
       </Route>
     </Switch>
    </div>
   </Router>
  );
}

export default App;
