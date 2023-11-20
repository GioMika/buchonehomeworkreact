
import './App.css';
import Footer2 from './components/Footer2';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cases from './pages/Cases'
import About from './pages/About'
import Service from './pages/Service'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Footer />}/>
      
      </Routes>

      <Footer2 />
      </Router>
    </>
  );
}

export default App;


