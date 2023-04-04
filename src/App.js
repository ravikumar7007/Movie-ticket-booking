
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cinemapage from './Components/Cinemapage/Cinemapage';
import Homepage from './Components/HomePage/Homepage';
import MoviesPage from './Components/MoviePage/MoviesPage';
import SeatPage from './Components/SeatPage/SeatPage';
import Login from './Components/User/LogIn/Login';
import SignUp from './Components/User/SignUp/SignUp';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/movie' element={<MoviesPage />}></Route>
         <Route path="/signup" element={<SignUp />}></Route>
         <Route path='/login' element={<Login />} />
         <Route path='/movie/:movieid' element={<MoviesPage />} ></Route>
         <Route path="/cinema" element={<Cinemapage />} ></Route>
         <Route path='/cinema/:movieid' element={<Cinemapage />} ></Route>
         <Route path="/seat" element={<SeatPage />} ></Route>
         <Route path="/seat/:movieid" element={<SeatPage />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;