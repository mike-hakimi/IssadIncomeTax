

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './HomePages/Home';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

import './App.css';
import Forms from './Components/Forms';
import Contact from './Components/Contact';

function App() {
  // Define the root component of the application
return (
  <Router>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/forms' element={<Forms/>}/>
  </Routes>
  <Footer />
  </Router>
)
}

export default App;
