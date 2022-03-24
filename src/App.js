import Home from './components/page/Home';
import Contact from './components/page/Contact'
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import EyesLash from './components/page/EyesLash';
import NailProducts from './components/page/NailProducts';
import ShowRoom from './components/page/ShowRoom';
import WeddingDress from './components/page/WeddingDress';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Booking from './components/page/booking';
import Menu2 from './components/menu/menu2';
import Ruler from './components/page/ruler';
import Security from './components/page/security';
import Revice from './components/page/revice';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/eyelash' element={< EyesLash/>}/>
          <Route path='/nailproduct' element={<NailProducts />}/>
          <Route path='/showroom' element={<ShowRoom />}/>
          <Route path='/weddingdress' element={< WeddingDress/>}/>
          <Route path='/booking' element={< Booking />} />
          <Route path='/quydinhvahinhthucthanhtoan' element={< Ruler />} />
          <Route path='/chinhsachbaomatthongtin' element={<Security />} />
          <Route path='/chinhsachgiaonhanhanghoa' element={< Revice />} />
        </Routes>
        <Menu />
        <Menu2/>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
