import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import RecoverPassword from './pages/recoverPassword.jsx/RecoverPassword';
import ChangePassword from './pages/changePassword/ChangePassword';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/register' element={<SimpleLayout><Register/></SimpleLayout>}/>
          <Route path='/recover-password' element={<SimpleLayout><RecoverPassword/></SimpleLayout>}/>
          <Route path='/change-password' element={<SimpleLayout><ChangePassword/></SimpleLayout>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
