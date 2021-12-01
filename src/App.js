import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import RegistrarPersona from './components/RegistrarPersona';
import Home from './components/Home';
import BarraNav from './components/BarraNav';
import BarraM from './components/BarraM'

function App() {
  return (
    <Router>
      <BarraNav/>
      <Route path = '/' exact component={Home}/>
      <Route path = '/registrarPersona' exact component={RegistrarPersona}/>
    </Router>
      );
}

export default App;
