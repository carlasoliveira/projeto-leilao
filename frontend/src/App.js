import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import RecoverPassword from './pages/recoverPassword.jsx/RecoverPassword';
import ChangePassword from './pages/changePassword/ChangePassword';
import AuctionFinished from './pages/auctionFinished/AuctionFinished';
import NextAuction from './pages/nextAuction/NextAuction';
import AuctionInProgress from './pages/auctionInProgress/AuctionInProgress';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import PrivateRouter from './components/PrivateRouter';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter/>}>
            <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          </Route>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/register' element={<SimpleLayout><Register/></SimpleLayout>}/>
          <Route path='/recover-password' element={<SimpleLayout><RecoverPassword/></SimpleLayout>}/>
          <Route path='/change-password' element={<SimpleLayout><ChangePassword/></SimpleLayout>}/>
          <Route path='/finished-auction' element={<DefaultLayout><AuctionFinished/></DefaultLayout>}/>
          <Route path='/next-auction' element={<DefaultLayout><NextAuction/></DefaultLayout>}/>
          <Route path='/auction-in-progress' element={<DefaultLayout><AuctionInProgress/></DefaultLayout>}/>
          <Route path='/profile' element={<DefaultLayout><Profile/></DefaultLayout>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
