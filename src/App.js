import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './components/Home';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <>
      <BrowserRouter>
        

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
