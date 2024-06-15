import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UserLoginPage from './components/UserLoginPage';
import UserRegister from './components/UserRegister';
import UserComponent from './components/UserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<UserLoginPage/>}></Route>
        <Route path='user-registeration' element={<UserRegister/>}></Route>
        <Route path='user' element={<UserComponent/>}></Route>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
