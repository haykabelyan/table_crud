import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import AddUser from './pages/users/AddUser';
import EditUser from './pages/users/EditUser';
import User from './pages/users/User';

const App = ()=>{


    return (
       <Router>
           <div className='App'>
           <Navbar />
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/users/add' element={<AddUser />} />
               <Route path='/users/edit/:id' element={<EditUser />} />
               <Route path='/users/:id' element={<User />} />
               <Route path='*' element={<NotFound />} />
           </Routes>
           </div>
       </Router>
    );
}


export default App;
