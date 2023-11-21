import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Calendar from './pages/Calendar/Calendar';
import One_public from './pages/Calendar/One_public/One_public';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import HP_language from './pages/HP_language/HP_language';
import Hp_menu from './pages/HP_menu/Hp_menu';
import Activity from './pages/Service/Activity/Activity';
import Regata from './pages/Service/Regata/Regata';
import Rent from './pages/Service/Rent/Rent';
import Basket from './pages/shop/Basket/Basket';
import Categories from './pages/shop/Categories/Categories';
import Decor from './pages/shop/Decor/Decor';
import One_clothes from './pages/shop/One_clothes/One_clothes';
import Shop from './pages/shop/Shop';
import One_publication from './pages/SMI_About/One_publication/One_publication';
import SMI_About from './pages/SMI_About/SMI_About';
import Success_race from './pages/Success_race/Success_race';
import Adults from './pages/TSA/Adults/Adults';
import Children from './pages/TSA/Children/Children';
import One_course from './pages/TSA/One_course/One_course';
import Schedule from './pages/TSA/Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hp_menu' element={<Hp_menu/>}/>
        <Route path='/one_public' element={<One_public/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/one_publication' element={<One_publication/>}/>
        <Route path='/smi_about' element={<SMI_About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/decor' element={<Decor/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/one_clothes' element={<One_clothes/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/success_race' element={<Success_race/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/adult' element={<Adults/>}/>
        <Route path='/one_course' element={<One_course/>}/>
        <Route path='/children' element={<Children/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/regata' element={<Regata/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/hp_language' element={<HP_language/>}/>
        <Route path='/hp_menu' element={<Hp_menu/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
