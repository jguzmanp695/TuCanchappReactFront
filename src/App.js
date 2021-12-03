import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import RegistrarPersona from './components/RegistrarPersona';
import Home from './components/Home';
import BarraNav from './components/BarraNav';
import BarraM from './components/BarraM'
import Login from './components/Login'
import LoginP from './components/Login1'

function App() {
  return (
    <Router>
      <BarraNav/>
      <Route path = '/' exact component={Home}/>
      <Route path = '/registrarPersona' exact component={RegistrarPersona}/>
      <Route path = '/login' exact component={Login}/>
      <Route path = '/home' exact component={LoginP}/>
    </Router>
      );
}

export default App;
