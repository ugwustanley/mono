import Routes from './router/Routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Router>
              <Routes />        
       </Router>
    </div>
  );
}

export default App;
