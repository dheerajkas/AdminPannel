import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Style from './Style.css';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
